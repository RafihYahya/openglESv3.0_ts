export type VertexBufferElements = {
    type:GLuint
    size:GLint
    normalized:boolean
}

export interface vBuffer {
    bind: () => void
    unbind: () => void
    delete: () => void
}