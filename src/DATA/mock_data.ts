import { FragmentShaderSources, VertexShaderSources } from "../MODULES/Shaders/GLSL/shader_glsl"
import { UniformsName } from "../Types/common_enums"
import { Vec4 } from "../Types/global_types"
import { renderData } from "../Types/RenderTypes/renderer_types"
import { ShadersSource, UniformData } from "../Types/ShaderTypes/shader_type"
import { indices2 } from "./VertexData/vertex_data"

export let shaderSourceTemp: ShadersSource = {
    vertexShader: VertexShaderSources[0],
    fragementShader: FragmentShaderSources[0]
}
export let shaderSourceTemp2: ShadersSource = {
    vertexShader: VertexShaderSources[1],
    fragementShader: FragmentShaderSources[1]
}


let uniformColor00: UniformData = {
    uniName: UniformsName.COLOR,
    uniLocation: null,
    uniData: { x: 0.2, y: 0.4, z: 0.6, w: 1.0 }

}
let uniformColor01: UniformData = {
    uniName: UniformsName.COLOR + '2',
    uniLocation: null,
    uniData: { x: 0.2, y: 0.4, z: 0.6, w: 1.0 }

}
let unifromTexture00: UniformData = {
    uniName: UniformsName.TEXTURE,
    uniLocation: null,
    uniData: null
}

export let UniforsCollectionsShader0: UniformData[] = [uniformColor00, unifromTexture00]
export let UniforsCollectionsShader1: UniformData[] = [uniformColor01, unifromTexture00]



export let vecClearColor: Vec4 = {
    x: 0.0,
    y: 0.0,
    z: 0.0,
    w: 1.0
}

export const myrenderData: renderData = {
    vec4: vecClearColor,
    drawCount: indices2.length,
    offset: 0
}

