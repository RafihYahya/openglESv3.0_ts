import { myrenderData, shaderSourceTemp, UniforsCollectionsShader0 } from "./DATA/mock_data";
import { textData00 } from "./DATA/TextureData/mock_texture_data";
import { indices2, vertices } from "./DATA/VertexData/vertex_data";
import { GlobalSingeltonRenderer } from "./MODULES/Renderer/gs_renderer";
import { RenderingObject } from "./MODULES/renderingObject";




const main: () => void = async () => {

  const myfirstObject =
    new RenderingObject('object1', vertices, indices2, [3, 2], shaderSourceTemp, UniforsCollectionsShader0, textData00, myrenderData)

  GlobalSingeltonRenderer.loadMultRObjects([myfirstObject])
  GlobalSingeltonRenderer.Draw()


}; main();
