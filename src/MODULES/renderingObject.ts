import { UniforsCollectionsShader0 } from "../DATA/mock_data"
import { VertexData } from "../DATA/VertexData/vertex_data"
import { BufferObject, TextureData, vertexDataAttribute } from "../Types/global_types"
import { renderData } from "../Types/RenderTypes/renderer_types"
import { ShadersSource, UniformData } from "../Types/ShaderTypes/shader_type"
import { bufferInit } from "../Utils/fn_utils"
import { Shader } from "./Shaders/shader"
import { Texture } from "./Textures/texture"

interface RenderingObjectData {
  Vertexdata: VertexData
  Shader: Shader
  Texture: Texture
  Buffer: BufferObject | null
}


export class RenderingObject {
  objectName: string

  vertexPosition: vertexDataAttribute
  vertexIndices: number[]
  vertexAttrib: number[]

  shaderSource: ShadersSource
  uniforms: UniformData[]

  textureData: TextureData

  renderData: renderData
  private rObjectData: RenderingObjectData | null = null

  
  constructor(objectName: string, vertexPosition: vertexDataAttribute, vertexIndices: number[],
    vertexAttrib: number[], shaderSource: ShadersSource, uniforms: UniformData[],
    textureData: TextureData, renderData: renderData) {

    this.objectName = objectName
    this.vertexPosition = vertexPosition
    this.vertexIndices = vertexIndices
    this.vertexAttrib = vertexAttrib

    this.shaderSource = shaderSource
    this.uniforms = uniforms

    this.textureData = textureData
    this.renderData = renderData
    /*  */
    this.rObjectData = {
      Vertexdata: new VertexData(vertexPosition, vertexIndices, vertexAttrib),
      Shader: new Shader(this.shaderSource, this.uniforms),
      Texture: new Texture(this.textureData),
      Buffer: null,
    }
    this.rObjectData.Buffer = bufferInit(this.rObjectData.Vertexdata)
    if (this.rObjectData === null) {
      throw new Error("Buffer Normally Can't be Null");

    }
    /*  */
    // TODO MAKE IT WORK FOR ANY n

    this.rObjectData.Texture.bind(0);
    this.rObjectData.Shader.setUniformBatch(UniforsCollectionsShader0.filter(e => e.uniName == 'u_Texture'), 0)


  }

  getPrivProps(): RenderingObjectData {
    if (this.rObjectData === null) {
      throw new Error("Can't be NULL");
    }
    return this.rObjectData
  }

}