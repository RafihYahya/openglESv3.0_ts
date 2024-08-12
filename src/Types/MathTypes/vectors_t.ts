export type VEC4 = [number, number, number, number]
export type VEC3 = [number, number, number]
export type VEC2 = [number, number]

export type MAT2 = [VEC2, VEC2]
export type MAT3 = [VEC3, VEC3, VEC3]
export type MAT4 = [VEC4, VEC4, VEC4, VEC4]


export type VEC = VEC2 | VEC3 |VEC4
export type MAT = MAT2 | MAT3 |MAT4
