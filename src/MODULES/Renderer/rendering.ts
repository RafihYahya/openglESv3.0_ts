import { Vec4 } from "../../Types/global_types";
import { renderData } from "../../Types/renderer_types";
import { UniformData } from "../../Types/shader_type";
import { GL_Error } from "../../Utils/fn_utils";
import { vec4 } from "../../Utils/type_utils";
import { VertexArrayBuffer } from "../Buffers/vertex_buffer";
import { canvas, gl } from "../Canva/canva";
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
    GL_Error(() => gl.drawElements(gl.TRIANGLES, count, gl.UNSIGNED_INT, offset));

}


export class Renderer {
    shader: Shader
    va: VertexArrayBuffer
    //ib: IndexBuffer
    renderData: renderData
    uniforms: UniformData[]
    constructor(shader: Shader, va: VertexArrayBuffer, renderData: renderData, uniforms: UniformData[]) {
        this.shader = shader
        this.va = va
        this.uniforms = uniforms
        this.renderData = renderData

        va.bind()
    }

    Draw() {
        this.bind()
        if (this.uniforms !== undefined) {
            this.shader.setUniformBatch(this.uniforms)
        }

        cglRender(this.renderData.vec4, this.renderData.drawCount, this.renderData.offset)
        canvas.height = innerHeight
        canvas.width = innerWidth
    }

    bind(){
        this.shader.useProgram()
    }

    updateUniforms(uniforms: UniformData[]) {
        this.uniforms = uniforms
    }

    swapShader(shader: Shader, uniforms: UniformData[]) {
        this.shader = shader
        this.updateUniforms(uniforms)
        shader.useProgram()
    }
}

