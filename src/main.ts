import { myrenderData, shaderSourceTemp, shaderSourceTemp2, uniformColor00, uniformColor01 } from './DATA/mock_data';
import { vertexDataSample } from './DATA/vertex_data';
import { Renderer } from './MODULES/Renderer/rendering';
import { Shader } from './MODULES/Shaders/shader';
import { Texture } from './MODULES/Textures/texture';
import { BUFFER } from './Types/global_types';
import { UniformData } from './Types/shader_type';
import { bufferInit, genRandVec4 } from './Utils/fn_utils';



const main: () => void = async () => {


  /* 
  * SHADERS  ***************************
  */

  const ShaderProg = new Shader(shaderSourceTemp, [uniformColor00])
  const ShaderProg2 = new Shader(shaderSourceTemp2, [uniformColor01])
  /* 
  *  BUFFERS ***************************
  */

  const [VAO]: BUFFER = bufferInit(vertexDataSample.positions, vertexDataSample.indices, 3)
  /* 
   * TEXTURES
  */

  const TEXTURE = new Texture()

  /* 
  * RENDERING **********************
  */
  const renderer = new Renderer(ShaderProg, VAO, myrenderData, [uniformColor00])

  let i = 0;
  const render = () => {

    let drawUniformData: UniformData[] = [{ ...uniformColor00, uniData: genRandVec4() }]
    let drawUniformData1: UniformData[] = [{ ...uniformColor01, uniData: genRandVec4() }]

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
      renderer.Draw()
      renderer.updateUniforms(y)
    }

  }
}; main();
