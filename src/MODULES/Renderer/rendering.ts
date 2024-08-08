import { Vec4 } from "../../Types/global_types";
import { renderData } from "../../Types/renderer_types";
import { UniformData } from "../../Types/shader_type";
import { vec4 } from "../../Utils/type_utils";
import { IndexBuffer, VertexArrayBuffer } from "../Buffers/vertex_buffer";
import { canvas, gl } from "../Canva/canva";
import { DEBUG_LOG } from "../Logging/console_logging";
import { Shader } from "../Shaders/shader";





const cglRender = (vector4: Vec4, count: GLsizei, offset: GLintptr) => {


    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.clearColor(...vec4(
        {
            x: vector4.x,
            y: vector4.y,
            z: vector4.z,
            w: vector4.w,
        }
    ));
    gl.clear(gl.COLOR_BUFFER_BIT);
    //
    gl.drawElements(gl.TRIANGLES, count, gl.UNSIGNED_INT, offset);

}


export class Renderer {
    shader: Shader
    va: VertexArrayBuffer
    renderData: renderData
    private uniforms: UniformData[]

    constructor(shader: Shader, va: VertexArrayBuffer, renderData: renderData) {
        this.shader = shader
        this.va = va
        this.uniforms = shader.g_uni
        this.renderData = renderData

        va.bind()

        DEBUG_LOG('F:Renderer::Constructor', arguments)
    }

    Draw(ib?: IndexBuffer) {
        if (ib != (undefined || null)) {
            ib.bind()
        }
        this.bind()
        if (this.uniforms !== undefined) {
            DEBUG_LOG('D:Renderer::Uniforms', this.uniforms)
            this.shader.setUniformBatch(this.uniforms)
        }

        cglRender(this.renderData.vec4, this.renderData.drawCount, this.renderData.offset)
        canvas.height = innerHeight
        canvas.width = innerWidth
        DEBUG_LOG('F:Renderer::Draw', this.uniforms)
    }

    bind() {
        this.shader.useProgram()
        DEBUG_LOG('F:Renderer::bind', arguments)
    }

    updateUniforms(uniforms: UniformData[]) {
        this.uniforms = uniforms
        DEBUG_LOG('F:Renderer::UpdateUniforms', arguments)
    }

    swapShader(shader: Shader, uniforms: UniformData[]) {
        this.shader = shader
        this.updateUniforms(uniforms)
        shader.useProgram()

        DEBUG_LOG('F:Renderer::SwapShader', arguments)
    }

    swapVAO(VAO: VertexArrayBuffer) {
        this.va = VAO
        this.va.bind()
        DEBUG_LOG('F:Renderer::SwapVAO', arguments)
    }
}

