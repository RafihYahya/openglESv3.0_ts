import { myrenderData, shaderSourceTemp, shaderSourceTemp2, UniforsCollectionsShader0, UniforsCollectionsShader1 } from './DATA/mock_data';
import { vertexDataSample } from './DATA/vertex_data';
import { htmlimage } from './MODULES/Asset_Handler/image';
import { DEBUG_LOG } from './MODULES/Logging/console_logging';
import { Renderer } from './MODULES/Renderer/rendering';
import { Shader } from './MODULES/Shaders/shader';
import { Texture } from './MODULES/Textures/texture';
import { BUFFER } from './Types/global_types';
import { UniformData } from './Types/shader_type';
import { bufferInit, genRandVec4 } from './Utils/fn_utils';



const uniformColor00 = UniforsCollectionsShader0.filter(e => (e.uniName == 'u_Color' || e.uniName == 'u_Texture'))
const uniformColor01 = UniforsCollectionsShader1.filter(e => e.uniName == 'u_Color2')

const main: () => void = async () => {

  /* 
  * SHADERS  ***************************
  */

  const ShaderProg = new Shader(shaderSourceTemp, uniformColor00)
  const ShaderProg2 = new Shader(shaderSourceTemp2, uniformColor01)

  /* 
  *  BUFFERS ***************************
  */

  const [VAO, ...restBuffs]: BUFFER = bufferInit(vertexDataSample.positions, vertexDataSample.indices, 3)

  /* 
   * TEXTURES
  */

  const TEX = new Texture({ localBuffer: htmlimage, height: 100, width: 100 }); TEX.bind()
  ShaderProg.setUniformBatch(UniforsCollectionsShader0.filter(e => e.uniName == 'u_Texture'))

  /* 
  * RENDERING **********************
  */

  const renderer = new Renderer(ShaderProg, VAO, myrenderData)

  let i = 0;
  const render = () => {

    let drawUniformData: UniformData[] = [{ ...(uniformColor00[0]), uniData: genRandVec4() }]
    let drawUniformData1: UniformData[] = [{ ...(uniformColor01[0]), uniData: genRandVec4() }]

    DEBUG_LOG('D:main::drawUniformData', drawUniformData)
    DEBUG_LOG('D:main::drawUniformData1', drawUniformData1)

    forFun(drawUniformData, drawUniformData1)


    setTimeout(() => {
      requestAnimationFrame(render);
      i++;
    }, 1000);
  }
  requestAnimationFrame(render)

  const forFun = (x: UniformData[], y: UniformData[]) => {
    if (i % 2 == 0) {
      renderer.swapShader(ShaderProg, x)
      renderer.Draw()
      renderer.updateUniforms(x)
    } else {
      renderer.swapShader(ShaderProg2, y)
      restBuffs[0].updateData(vertexDataSample.positions.map(e => e * Math.random()))
      renderer.Draw()
      renderer.updateUniforms(y)
    }

  }
}; main();
