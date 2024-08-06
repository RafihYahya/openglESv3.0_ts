import { glcleartuple, Vec4 } from "../Types/global_types";

export const vec4 = (vec4: Vec4): glcleartuple => {
    return [vec4.x, vec4.y, vec4.z, vec4.w];
}

