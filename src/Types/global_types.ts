/* TYPES */

import { IndexBuffer, VertexArrayBuffer, VertexBuffer, VertexBufferLayout } from "../MODULES/Buffers/vertex_buffer"

export type Vec4 = {
    x: number,
    y: number,
    z: number,
    w: number,
}
export type glcleartuple = [GLclampf, GLclampf, GLclampf, GLclampf]


export type BUFFER = [VertexArrayBuffer , VertexBuffer , IndexBuffer , VertexBufferLayout]

