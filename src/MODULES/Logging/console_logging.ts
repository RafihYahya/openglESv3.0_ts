
const ANSI_COLORS = (s: string, color: string): string => {
    color = color.toUpperCase()
    switch (color) {
        case 'GREEN': return '\x1b[36m' + s + '\x1b[0m'
        case 'RED': return ''
        default:
            throw new Error("Error No Matching Color Found");
    }
}


export const DEBUG_LOG = (...args: any[]) => {
    args.forEach((e) => {
        if (typeof (e) == 'string') {
            if ((<string>e).includes('F:')) {
                e = (<string>e).replace('F:', ANSI_COLORS('FunctionCall: ', 'green'))
            }
            console.debug(e)
        }
        else {
            console.debug(e)
        }
    })
}
