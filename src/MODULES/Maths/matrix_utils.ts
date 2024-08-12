import { isMAT2, isMAT3, isMAT4 } from "../../Types/MathTypes/type_predicate"
import { MAT, MAT2, MAT3, MAT4, VEC } from "../../Types/MathTypes/vectors_t"



const matrixVecMult = (matrix: MAT, vec: VEC) => {
    if (isMAT4(matrix)) {
        // TODO VEC4 mult MAT4
    } else if (isMAT3(matrix)) {
        // TODO VEC3 mult MAT3
    } else if (isMAT2(matrix)) {
        // TODO VEC2 mult MAT2
    } else {
        // TODO HANDLE 
    }
}






const rotateVec = (vec: VEC) => {
    switch (vec.length) {
        case 4:
            return '4'
        case 3:
            return '3'
        case 2: return '2'
        default:
            const exhaustiveCheck: never = <never>vec;
            throw new Error("Non Exhaustive Switch");

    }
}