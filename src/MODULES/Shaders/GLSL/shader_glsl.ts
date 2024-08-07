import { fragmentShaderSource2, vertexShaderSource2 } from "./shader_glsl1"

type GLSL = string[]

const vertexShaderSource: string = `#version 300 es

layout (location = 0) in vec3 aPos;
//layout (location = 1) in vec2 aTexCoord;

void main()
{
    gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);
}`


const fragmentShaderSource: string = `#version 300 es
precision mediump float; // Specify the precision for floats

out vec4 FragColor;
uniform vec4 u_Color;
// in vec2 TexCoord
// uniform sampler2D u_Texture;



void main()
{
    FragColor = u_Color + vec4(0.1,0.4,0.2,0);
}`


export const VertexShaderSources: GLSL = [vertexShaderSource,vertexShaderSource2]
export const FragmentShaderSources: GLSL = [fragmentShaderSource,fragmentShaderSource2]


