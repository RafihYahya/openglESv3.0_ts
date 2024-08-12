/* TYPES */

import { IndexBuffer, VertexArrayBuffer, VertexBuffer, VertexBufferLayout } from "../MODULES/Buffers/vertex_buffer"
import { VEC3 } from "./MathTypes/vectors_t"

export type Vec4 = {
    x: number,
    y: number,
    z: number,
    w: number,
}
export type glcleartuple = [GLclampf, GLclampf, GLclampf, GLclampf]
export type vertexDataAttribute = [...VEC3, ...number[]]


type BUFFER = [VertexArrayBuffer, VertexBuffer, IndexBuffer, VertexBufferLayout]


export type BufferObject = {

    VAO: VertexArrayBuffer
    VBO: VertexBuffer
    IB: IndexBuffer
    VLAY: VertexBufferLayout
}

