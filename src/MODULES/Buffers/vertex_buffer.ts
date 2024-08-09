import { vBuffer, VertexBufferElements } from "../../Types/vertex_buffer"
import { GL_Error } from "../../Utils/fn_utils"
import { gl } from "../Canva/canva"
import { DEBUG_LOG } from "../Logging/console_logging"




export class VertexBuffer implements vBuffer {
    private m_rendererId: WebGLBuffer | null
    constructor(data: number[]) {
        this.m_rendererId = gl.createBuffer()
        if (this.m_rendererId === null) {
            throw new Error("Can't Create Buffer")
        }
        GL_Error(() => gl.bindBuffer(gl.ARRAY_BUFFER, this.m_rendererId))
        GL_Error(() => gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW))

    }
    bind = () => {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.m_rendererId)
    }
    unbind = () => {
        gl.bindBuffer(gl.ARRAY_BUFFER, null)

    }
    delete = () => {
        GL_Error(() => gl.deleteBuffer(this.m_rendererId))
    }
    updateData = (data: number[]) => {
        this.bind()
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
    }
}

export class IndexBuffer implements vBuffer {
    private m_rendererId: WebGLBuffer
    constructor(data: number[], oldIb?: IndexBuffer) {
        this.m_rendererId = gl.createBuffer()!
        GL_Error(() => gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.m_rendererId))
        GL_Error(() => gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int32Array(data), gl.STATIC_DRAW))
        if (oldIb != (undefined)) {
            GL_Error(() => this.unbind())
            oldIb.bind()
        }
    }
    bind = () => {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.m_rendererId)
    }
    unbind = () => {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)

    }
    delete = () => {
        GL_Error(() => gl.deleteBuffer(this.m_rendererId))
    }
}



export class VertexBufferLayout {
    private m_Elements: VertexBufferElements[]
    private m_Stride: number
    constructor() {
        this.m_Elements = []
        this.m_Stride = 0
    }

    // TODO : IMPROVE CODE TO HANDLE DIFFERENT TYPES WITH CORRECT STRIDES AND OFFSETS

    push(count: number, type: number): void {
        if (type == gl.FLOAT) {
            this.m_Elements.push({ type: gl.FLOAT, size: <number>count, normalized: false })
            this.m_Stride += 4 * (<number>count)
        }
        if (type == gl.UNSIGNED_INT) {
            throw new Error("Not Ready Yet");

            this.m_Elements.push({ type: gl.UNSIGNED_INT, size: Math.floor(<number>count), normalized: false })
            this.m_Stride += 4
        }
        DEBUG_LOG('F:Vlayout::Push', this.m_Elements)

    }

    getElements(): VertexBufferElements[] {
        return this.m_Elements
    }

    getStride(): number {
        return this.m_Stride
    }



}





export class VertexArrayBuffer {
    //TO DO 
    private m_Render_Id;
    constructor() {
        this.m_Render_Id = gl.createVertexArray();
        this.bind()
    }
    AddBuffer = (vbo: VertexBuffer, layout: VertexBufferLayout) => {
        this.bind();
        vbo.bind();

        let elems: VertexBufferElements[] = layout.getElements()
        let offset = 0
        elems.forEach((value, index) => {
            gl.enableVertexAttribArray(index);
            gl.vertexAttribPointer(index, value.size, gl.FLOAT, value.normalized, layout.getStride(), offset)
            offset += (value.size) * 4
        });

        DEBUG_LOG("D:m_Elements", [elems, offset])

    }
    bind(ib?: IndexBuffer) {
        gl.bindVertexArray(this.m_Render_Id);
        if (ib != undefined) ib.bind()

    }
    unbind() {
        gl.bindVertexArray(null);

    }
}

