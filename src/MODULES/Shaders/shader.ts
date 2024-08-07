import { Vec4 } from "../../Types/global_types";
import { ShaderID, ShadersSource, UniformData } from "../../Types/shader_type";
import { gl } from "../Canva/canva";
import { DEBUG_LOG } from "../Logging/console_logging";

interface ShaderType {
    /* PROPERTIES */
    g_uni: UniformData[]
    shaderSource: ShadersSource
    /* METHODS */
    bind(): void
    unbind(): void
    unbindProgram(): void
    setupUnifromsLocation(): void
    setUniformBatch(uniforms: UniformData[]): void
    getProgram(): WebGLProgram | null
    getPrivateIDs(): ShaderID
}


export class Shader implements ShaderType {
    private m_RendererId: WebGLProgram | null
    private shaders: ShaderID
    g_uni: UniformData[]
    shaderSource: ShadersSource
    constructor(shaderSource: ShadersSource, g_uni: UniformData[]) {
        this.shaderSource = shaderSource
        this.shaders = { vs: 0, fs: 0 }
        this.m_RendererId = null
        this.g_uni = g_uni

        this.parseShader();
        this.compileShader();
        this.createShader();
        this.unbind();
        this.setupUnifromsLocation()

        DEBUG_LOG("IN:Shader::Constructor", [this.m_RendererId, this.shaders, g_uni, shaderSource])



    }
    bind(): void {
        DEBUG_LOG('F:Shader::bind -- START --', [this.shaders.fs, this.shaders.vs])
        this.shaders.vs = gl.createShader(gl.VERTEX_SHADER);
        if (this.shaders.fs === null) {
            throw new Error("Can't Create Vertex Shader");
        }
        this.shaders.fs = gl.createShader(gl.FRAGMENT_SHADER);
        if (this.shaders.vs === null) {
            throw new Error("Can't Create Fragment Shader");
        }
        DEBUG_LOG('F:Shader::bind -- END --', [this.shaders.fs, this.shaders.vs])
    }
    unbind(): void {

        DEBUG_LOG('F:Shader::unbind -- START --', [this.shaders.fs, this.shaders.vs])
        gl.deleteShader(this.shaders.vs)
        gl.deleteShader(this.shaders.fs)
        DEBUG_LOG('F:Shader::unbind -- END --', [this.shaders.fs, this.shaders.vs])

    }

    unbindProgram() {
        gl.useProgram(null)
        DEBUG_LOG('F:Shader::unbindProgram')

    }

    setupUnifromsLocation() {
        this.g_uni.forEach((e) => {
            if (this.m_RendererId == null) {
                throw new Error("No WebGlProgram Found");
            }
            e.uniLocation = gl.getUniformLocation(this.m_RendererId, e.uniName)
            DEBUG_LOG('F:setupUniformsLocation', e)
        })
        DEBUG_LOG('F:Shader::setupUnifromsLocation', arguments)
    }

    setUniformBatch(uniforms: UniformData[]) {
        uniforms.forEach((e) => {
            if (e.uniName.includes('u_Color'))
                gl.uniform4f(e.uniLocation, (<Vec4>e.uniData).x, (<Vec4>e.uniData).y, (<Vec4>e.uniData).z, (<Vec4>e.uniData).w)
            if (e.uniName.includes('u_Texture'))
                DEBUG_LOG('TO:SETUP TEXTURE HERE')
        })
        DEBUG_LOG('F:setUniformBatch', [uniforms, arguments])
    }

    getProgram(): WebGLProgram | null {
        return this.m_RendererId
    }
    getPrivateIDs(): ShaderID {
        return {
            vs: this.shaders.vs,
            fs: this.shaders.fs,
        }
    }

    useProgram() {
        gl.useProgram(this.m_RendererId)
        DEBUG_LOG('F:Shader::useProgram', [arguments, this.m_RendererId])
    }

    private compileShader() {

        gl.compileShader(this.shaders.vs!);
        gl.compileShader(this.shaders.fs!);
        if (!gl.getShaderParameter(this.shaders.vs!, gl.COMPILE_STATUS)) {
            console.error("An error occurred compiling the shaders: ", gl.getShaderInfoLog(this.shaders.vs!));
            throw new Error("Couldn't Compile Shaders");


        }
        if (!gl.getShaderParameter(this.shaders.fs!, gl.COMPILE_STATUS)) {
            console.error("An error occurred compiling the shaders: ", gl.getShaderInfoLog(this.shaders.fs!));
            throw new Error("Couldn't Compile Shaders");
        }
        DEBUG_LOG('F:Shader::compileShader => Success', arguments)

    }

    private parseShader() {

        this.bind();
        gl.shaderSource(this.shaders.vs!, this.shaderSource.vertexShader);
        gl.shaderSource(this.shaders.fs!, this.shaderSource.fragementShader);

        DEBUG_LOG('F:Shader::parseShader => Success', arguments)

    }

    private createShader() {

        this.m_RendererId = gl.createProgram();
        if (this.m_RendererId === null) {
            throw new Error("Can't Create Program Shader");
        }
        gl.attachShader(this.m_RendererId, this.shaders.vs!);
        gl.attachShader(this.m_RendererId, this.shaders.fs!);
        gl.linkProgram(this.m_RendererId);

        DEBUG_LOG("F:Shader::createShader", [arguments, this.m_RendererId])

    }


}