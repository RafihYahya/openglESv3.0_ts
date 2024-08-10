import { gl } from "../MODULES/Canva/canva"

function miaw(constructor: Function) {
    console.log('miaw')
}

export const runTests = (): void => {
    if (import.meta.env.PROD) return

    @miaw
    class temp0 {
        constructor() {
            console.log('temp0')
        }
    }
    let temp00 = new temp0()


    const myfunc = <T>(...arg: T[]): void => {
        arg.forEach(e => {
            console.log(e)
            e instanceof WebGL2RenderingContext ? console.log(e.FLOAT) : console.log('NOOOOOO')
        })
    }
    myfunc<WebGL2RenderingContext>(gl)

    type BINARYTREE<T> = {
        value: T
        node1: BINARYTREE<T> | null
        node2: BINARYTREE<T> | null
    }

    const printTREE = <T>(x: BINARYTREE<T>) => {
        console.log(x.value)
        if (x.node1 == null) {
            return
        }
        printTREE(x.node1)
    }
    printTREE<number>({
        value: 5,
        node1: {
            value: 6,
            node1: {
                value: 98,
                node1: null,
                node2: null
            },
            node2: null
        },
        node2: null
    })

}
