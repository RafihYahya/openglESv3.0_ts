 /* 
  * DATA
  */

class VertexData {
    positions:number[]
    indices:number[]
    constructor(positions:number[],indices:number[]){
        this.positions = positions,
        this.indices = indices
    }
}



   const positions: number[] = [
    0.5, 0.5, 0.0,  // top right
    0.5, -0.5, 0.0,  // bottom right
    -0.5, -0.5, 0.0,  // bottom left
    -0.5, 0.5, 0.0   // top left 
  ];
   const indices: number[] = [0, 1, 3, 1, 2, 3];
   const indices2: number[] = [0, 2, 3, 1, 2, 3];

   export let vertexDataSample = new VertexData(positions,indices);
   export let vertexDataSample2 = new VertexData(positions,indices2);