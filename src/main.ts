import { myrenderData, shaderSourceTemp, uniformColor00 } from './DATA/mock_data';
import { vertexDataSample } from './DATA/vertex_data';
import { IndexBuffer, VertexArrayBuffer, VertexBuffer, VertexBufferLayout } from './MODULES/Buffers/vertex_buffer';
import { Renderer } from './MODULES/Renderer/rendering';
import { Shader } from './MODULES/Shaders/shader';
import { Texture } from './MODULES/Textures/texture';
import { genRandVec4 } from './Utils/fn_utils';



const main: () => void = async () => {


  /* 
  * SHADERS  ***************************
  */
  const ShaderProg = new Shader(shaderSourceTemp, [uniformColor00])
  /* 
  *  BUFFERS ***************************
  */
  const VAO = new VertexArrayBuffer();
  const VBO = new VertexBuffer(vertexDataSample.positions);
  const VIB = new IndexBuffer(vertexDataSample.indices);
  const VLayout = new VertexBufferLayout();
  /*  */
  VLayout.push<number>(3);
  VAO.AddBuffer(VBO, VLayout)


  /* 
   * TEXTURES
  */

  const TEXTURE = new Texture()


  /* 
  * RENDERING **********************
  */
  const renderer = new Renderer(ShaderProg, VAO, myrenderData)

  let i = 0;
  const render = () => {

    let drawUniformData = { ...uniformColor00, uniData: genRandVec4() }
    renderer.Draw([drawUniformData])
    forFun()

    setTimeout(() => {
      requestAnimationFrame(render);
      i++;
    }, 2500);
  }
  requestAnimationFrame(render)

  const forFun = () => {
    if (i % 2 == 0) {
      myrenderData.drawCount = 6
    } else {
      myrenderData.drawCount = 3
    }

  }
}; main();
