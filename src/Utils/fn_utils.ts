import { GL_CheckError, GL_ClearError } from "../MODULES/error_handling"
import { Vec4 } from "../Types/global_types";

export const GL_Error = (fn:any):void => {

    GL_ClearError();
    fn();
    let gerror:boolean = GL_CheckError();
    console.assert(gerror != false)

}

const reverseObjectKeyValueSearch = (object:Object,value:any):string[] => {
    let output:string[] = []
    for (const [key,val] of Object.entries(object)) {
        //console.log(key + '' + val)
        if (val == value) {
           output.push(key)
        }
    }
    return output
}


export const genRandVec4 = () => {
     let vecRandomUniform4: Vec4 = {
        x: Math.random(),
        y: Math.random(),
        z: Math.random(),
        w: 1.0
    }
    return vecRandomUniform4
}