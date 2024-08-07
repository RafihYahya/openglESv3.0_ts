import { gl } from "../Canva/canva"
import { DEBUG_LOG } from "../Logging/console_logging"

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
    constructor(textureData: TextureData = TextureDataDefaultValue) {
        this.textureData = textureData
        this.m_Renderer_ID = null
        this.m_Renderer_ID = gl.createTexture()
        if (this.m_Renderer_ID == null) {
            throw new Error("Can't Create Texture");
        }
        gl.bindTexture(gl.TEXTURE_2D, this.m_Renderer_ID)

        /* TEXTURE PARAMS */
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

        if (textureData.localBuffer == null) {
            throw new Error("No Texture Data Provided");
        }
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, textureData.width, textureData.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, textureData.localBuffer)
        gl.bindTexture(gl.TEXTURE_2D, null)

        DEBUG_LOG('F:Texture_Constructor', textureData, this.m_Renderer_ID,arguments)

    }

    bind(slot?: number) {
        gl.activeTexture(gl.TEXTURE0 + (slot == undefined ? 0 : slot))
        gl.bindTexture(gl.TEXTURE_2D, <WebGLTexture>this.m_Renderer_ID)
        DEBUG_LOG('F:Texture_Bind', this.textureData, this.m_Renderer_ID,arguments)
        DEBUG_LOG('IN:Texture_Slots', gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS) + ' Available')
    }

    unbind() {

        gl.bindTexture(gl.TEXTURE_2D, null)
        DEBUG_LOG('F:Texture::unbind',arguments)
    }


}