import { IndexBuffer, VertexArrayBuffer, VertexBuffer, VertexBufferLayout } from "../MODULES/Buffers/vertex_buffer";
import { gl } from "../MODULES/Canva/canva";
import { GL_CheckError, GL_ClearError } from "../MODULES/error_handling"
import { DEBUG_LOG } from "../MODULES/Logging/console_logging";
import { BufferObject, Vec4 } from "../Types/global_types";

export const GL_Error = (fn: any): void => {

    GL_ClearError();
    fn();
    let gerror: boolean = GL_CheckError();
    console.assert(gerror != false)

}

const reverseObjectKeyValueSearch = (object: Object, value: any): string[] => {
    let output: string[] = []
    for (const [key, val] of Object.entries(object)) {
        //console.log(key + '' + val)
        if (val == value) {
            output.push(key)
        }
    }
    return output
}


export const genRandVec4 = () => {
    let vecRandomUniform4: Vec4 = {
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
        w: 1.0
    }
    DEBUG_LOG('F:genRandVec4', vecRandomUniform4)
    return vecRandomUniform4
}

export const bufferInit = (bufferData: number[], indexData: number[], count: number[]): BufferObject => {
    const VAO = new VertexArrayBuffer();
    const VBO = new VertexBuffer(bufferData);
    const VIB = new IndexBuffer(indexData);
    const VLayout = new VertexBufferLayout();
    /*  */
    count.forEach(e => {
        VLayout.push(e, gl.FLOAT)
    })
    VAO.AddBuffer(VBO, VLayout);

    DEBUG_LOG('F:BufferInit', [bufferData, indexData, count])
    DEBUG_LOG('D:BufferInit::DATA', [VAO, VBO, VIB, VLayout])


    return {
        VAO: VAO,
        VBO: VBO,
        IB: VIB,
        VLAY: VLayout
    }
}