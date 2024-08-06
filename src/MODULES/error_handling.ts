import { gl } from "./Canva/canva";


export const GL_ClearError = () => {
    while (gl.getError() != gl.NO_ERROR) { }
}

export const GL_CheckError = ():boolean => {
    let error = gl.getError();
    while (error != gl.NO_ERROR) {
        console.warn(`%c[OPENGL ERROR] => ${error.toString(16)}`,"color:yellow")
        error = gl.getError();
        return false;
    }
    return true;
}


