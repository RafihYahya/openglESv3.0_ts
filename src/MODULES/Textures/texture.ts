import { gl } from "../Canva/canva"

interface TextureData {
    localBuffer: HTMLImageElement | null
    height: number
    width: number

}

const TextureDataDefaultValue: TextureData = {
    localBuffer: null,
    height: 0,
    width: 0,

}


export class Texture {
    private m_Renderer_ID: WebGLTexture | null
    textureData: TextureData
    constructor(textureData: TextureData = TextureDataDefaultValue, m_Renderer_ID: WebGLTexture | null = 0) {
        this.textureData = textureData
        this.m_Renderer_ID = m_Renderer_ID

        //TODO LOAD IMAGE BUFFER SOMEHOW
        textureData.localBuffer = null

        m_Renderer_ID = gl.createTexture()
        if (m_Renderer_ID == null) {
            throw new Error("Can't Create Texture");
        }
        gl.bindTexture(gl.TEXTURE_2D, m_Renderer_ID)

        /* TEXTURE PARAMS */
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, textureData.width, textureData.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, textureData.localBuffer)
        gl.bindTexture(gl.TEXTURE_2D, null)

    }

    bind(slot:number) {
        gl.activeTexture(gl.TEXTURE0 + slot)
    }

    unbind() {

        gl.bindTexture(gl.TEXTURE_2D, null)
    }


}