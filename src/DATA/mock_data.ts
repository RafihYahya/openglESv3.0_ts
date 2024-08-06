import { FragmentShaderSources, VertexShaderSources } from "../MODULES/Shaders/shader_glsl"
import { Vec4 } from "../Types/global_types"
import { renderData } from "../Types/renderer_types"
import { ShadersSource, UniformData } from "../Types/shader_type"

export let shaderSourceTemp: ShadersSource = {
    vertexShader: VertexShaderSources[0],
    fragementShader: FragmentShaderSources[0]
}

/* let uniformDtTemp: Uniforms4fData = {
    name: "u_Color",
    data: { x: 0.2, y: 0.4, z: 0.6, w: 1.0 }

}
let uniformDtTemp2: Uniforms4fData = {
    name: "u_Color",
    data: { x: 0.2, y: 0.4, z: 0.6, w: 1.0 }

} */
export let uniformColor00: UniformData = {
    uniName: "u_Color",
    uniLocation: null,
    uniData: { x: 0.2, y: 0.4, z: 0.6, w: 1.0 }

}
export let uniformColor01: UniformData = {
    uniName: "u_Color",
    uniLocation: null,
    uniData: { x: 0.2, y: 0.4, z: 0.6, w: 1.0 }

}

export let vecClearColor: Vec4 = {
    x: 0.0,
    y: 0.0,
    z: 0.0,
    w: 1.0
}

export const myrenderData: renderData = {
    vec4: vecClearColor,
    drawCount: 6,
    offset: 0
}

