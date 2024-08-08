import { myrenderData, shaderSourceTemp, UniforsCollectionsShader0 } from './DATA/mock_data';
import { vertexDataSample2 } from './DATA/vertex_data';
import { htmlimage } from './MODULES/Asset_Handler/image';
import { DEBUG_LOG } from './MODULES/Logging/console_logging';
import { Renderer } from './MODULES/Renderer/rendering';
import { Shader } from './MODULES/Shaders/shader';
import { Texture } from './MODULES/Textures/texture';
import { BUFFER } from './Types/global_types';
import { UniformData } from './Types/shader_type';
import { bufferInit, genRandVec4 } from './Utils/fn_utils';




const main: () => void = async () => {

  const uniformColor00 = UniforsCollectionsShader0.filter(e => (e.uniName == 'u_Color' || e.uniName == 'u_Texture'))
  DEBUG_LOG('D:UniformsMainData', uniformColor00)

  /* 
  * SHADERS  ***************************
  */

  const ShaderProg = new Shader(shaderSourceTemp, uniformColor00)

  /* 
  *  BUFFERS ***************************
  */

  const [VAO, ...restBuffs]: BUFFER = bufferInit(vertexDataSample2.positions, vertexDataSample2.indices, [3, 2])

  /* 
   * TEXTURES
  */

  const TEX = new Texture({ localBuffer: htmlimage, height: 150, width: 150 }); TEX.bind(0)
  ShaderProg.setUniformBatch(UniforsCollectionsShader0.filter(e => e.uniName == 'u_Texture'), 0)

  DEBUG_LOG('D:ShaderProg->G_uni', ShaderProg.g_uni[1]);

  /* 
  * RENDERING **********************
  */

  const renderer = new Renderer(ShaderProg, VAO, myrenderData)

  let i = 0;
  const render = () => {

    let drawUniformData: UniformData[] = [{ ...(uniformColor00[0]), uniData: genRandVec4() }]

    DEBUG_LOG('D:main::drawUniformData', drawUniformData)

    forFun(drawUniformData)


    setTimeout(() => {
      requestAnimationFrame(render);
      i++;
    }, 1000);
  }
  requestAnimationFrame(render)

  const forFun = (x: UniformData[]) => {
    renderer.swapShader(ShaderProg, x)
    renderer.Draw()
    renderer.updateUniforms(x)


  }
}; main();
