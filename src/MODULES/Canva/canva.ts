

export const canvas = <HTMLCanvasElement>document.querySelector("#glcanvas")!;

const initCanva = (): WebGL2RenderingContext => {
  let gl:WebGL2RenderingContext|null = canvas.getContext("webgl2");
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it.",
    );
    throw Error("ERROR INIT CANVA");
  }
  
  
  /* LOGGING  */
  const ext = gl.getExtension("WEBGL_debug_renderer_info")!;
  //
  console.log(gl.getParameter(ext.UNMASKED_VENDOR_WEBGL));
  console.log(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL));
  console.log(gl.getParameter(gl.VERSION));
  console.log(gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
  console.log(gl.getParameter(gl.VENDOR));
  /************************ */
  
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  
  return gl;
}

export default initCanva
export const gl = initCanva();

