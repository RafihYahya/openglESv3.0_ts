import { canvas, gl } from "../Canva/canva";
import { RenderingObject } from "../renderingObject";

class GlobalRenderer {
    rObjects: RenderingObject[]

    constructor(rObjects: RenderingObject[]) {
        this.rObjects = rObjects
    }

    Draw(): void {
        if (this.rObjects.length > 0) {
            gl.viewport(0, 0, canvas.width, canvas.height)
            this.rObjects.forEach(e => {
                e.getPrivProps().Shader.useProgram()
                e.getPrivProps().Shader.bind()
                gl.drawElements(gl.TRIANGLES, e.renderData.drawCount, gl.UNSIGNED_INT, e.renderData.offset)
            })
        }
        else {
            throw new Error("Empty rObjects");
        }
    }

    PushRenderObj(rObject: RenderingObject) {
        this.rObjects.push(rObject)
    }

    PopRenderObj(objectName: string) {

        this.rObjects = this.rObjects.filter(e => {
            e.objectName !== objectName
        })
    }

    loadMultRObjects(newRObjects: RenderingObject[]) {
        newRObjects.forEach(e => {
            this.PushRenderObj(e)
        })
    }

    replaceRObjects(newRobjects: RenderingObject[]) {
        this.rObjects = newRobjects
    }

}

export const GlobalSingeltonRenderer = new GlobalRenderer([])

