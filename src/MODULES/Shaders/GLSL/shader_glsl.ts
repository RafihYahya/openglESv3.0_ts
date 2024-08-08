import { fragmentShaderSource2, vertexShaderSource2 } from "./shader_glsl1"

type GLSL = string[]

const vertexShaderSource: string = `#version 300 es
precision mediump float;

layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 textCoord;

out vec2 v_TextCoord;

void main()
{
    gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0);
    v_TextCoord = textCoord;
}`


const fragmentShaderSource: string = `#version 300 es
precision mediump float; // Specify the precision for floats

out vec4 FragColor;

in vec2 v_TextCoord;

uniform vec4 u_Color;
uniform sampler2D u_Texture;

void main()
{
    
    vec4 texColor = texture(u_Texture,v_TextCoord);
    FragColor = u_Color*0.25 + texColor;

}`


export const VertexShaderSources: GLSL = [vertexShaderSource, vertexShaderSource2]
export const FragmentShaderSources: GLSL = [fragmentShaderSource, fragmentShaderSource2]


