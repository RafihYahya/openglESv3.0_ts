

type Vec4 = {x:number} & {y:number} 
let z:number = 5

let myvec:Vec4 = 
{
    x:4,
    y:6
}

type testType = {
    readonly miaw: 556;
    blaw():void 
}

let testTest:testType = {
    blaw(): void {
        console.log("lol");
    },
    miaw: 556
}

interface lolima {
    readonly bkiaw:3434;
    blaw():void
}

testTest.blaw()


/* declare global {
    interface WebGLProgram{
        miaw():void
    }
}

WebGLProgram.prototype.miaw = () => {
    console.log('miaw miaw')
} */