/* 
 * DATA
 */

import { vertexDataAttribute } from "../../Types/global_types";
import { VEC3 } from "../../Types/MathTypes/vectors_t";


export class VertexData {
  positions: vertexDataAttribute
  indices: number[]
  attributeArray:number[]
  constructor(positions: [...VEC3, ...number[]], indices: number[],attribute:number[]) {
    this.positions = positions,
      this.indices = indices
      this.attributeArray = attribute
  }
}



const positions: number[] = [
  0.5, 0.5, 0.0,  // top right
  0.5, -0.5, 0.0,  // bottom right
  -0.5, 0.5, 0.0,  // bottom left
  -0.5, -0.5, 0.0   // top left 
];

const myvec3_0: VEC3 = [0.5, 0.5, 0.0]
const myvec3_1: VEC3 = [0.5, -0.5, 0.0]
const myvec3_3: VEC3 = [-0.5, -0.5, 0.0]
const myvec3_4: VEC3 = [-0.5, 0.5, 0.0]

const indices: number[] = [0, 1, 3, 1, 0, 3];


/* 
* EXPORTED
*/
export const vertices: vertexDataAttribute = [
  // positions   // texture coords
  0.5, 0.5, 0.0, 0.0, 0.0,   // top right
  0.5, -0.5, 0.0, 0.0, 1.0,   // bottom right
  -0.5, -0.5, 0.0, 1.0, 1.0,   // bottom left
  -0.5, 0.5, 0.0, 1.0, 0.0,    // top left 
];

export const vertices2: vertexDataAttribute = [
  // positions   // texture coords
  ...myvec3_0, 0.0,   // top right
  ...myvec3_1, 0.0, 1.0,   // bottom right
  ...myvec3_3, 1.0, 1.0,   // bottom left
  ...myvec3_4, 1.0, 0.0,    // top left 
];

export const indices2: number[] =
  [0, 1, 3,   // first triangle
    1, 2, 3];

