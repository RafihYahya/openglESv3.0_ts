import { Vec4 } from "../global_types"

export interface renderData {
    vec4: Vec4
    drawCount: GLsizei
    offset: GLintptr
}