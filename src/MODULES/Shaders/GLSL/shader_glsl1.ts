
export const vertexShaderSource2: string = `#version 300 es

layout (location = 0) in vec3 aPos;
//layout (location = 1) in vec2 aTexCoord;

void main()
{
    gl_Position = vec4(aPos.x + 0.3, aPos.y - 0.2,0.1, 1.0);
}`


export const fragmentShaderSource2: string = `#version 300 es
precision mediump float; // Specify the precision for floats

out vec4 FragColor;
uniform vec4 u_Color2;
// in vec2 TexCoord
// uniform sampler2D u_Texture;



void main()
{
     FragColor = u_Color2 + vec4(0.1,0.4,0.2,0);
}`





