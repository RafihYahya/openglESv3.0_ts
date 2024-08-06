class AppState {
    appName:string
    isdebug:boolean

    constructor(appName:string,isdebug:boolean){
        this.appName = appName,
        this.isdebug = isdebug
    }
}

export let myAppState = new AppState('opengl',false);