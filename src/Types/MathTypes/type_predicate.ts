import { MAT, MAT2, MAT3, MAT4 } from "./vectors_t"

export const isMAT2 = (arg: MAT): arg is MAT2 => {
    return (arg as MAT2).length === (2 * 2)
}
export const isMAT3 = (arg: MAT): arg is MAT3 => {
    return (arg as MAT3).length === (3 * 3)
}
export const isMAT4 = (arg: MAT): arg is MAT4 => {
    return (arg as MAT4).length === (4 * 4)
}

