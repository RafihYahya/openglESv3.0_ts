import { Vec4 } from "./global_types"

export interface ShadersSource {
    vertexShader: string
    fragementShader: string
}
export interface ShaderID {
    vs: WebGLShader | null
    fs: WebGLShader | null
}

export interface UniformData {
    uniName: string
    uniLocation: WebGLUniformLocation | null
    uniData: unknown
}
export interface Uniforms4fData {
    name: string
    data: Vec4
}

