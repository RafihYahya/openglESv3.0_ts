
const ANSI_COLORS = (s: string, color: string): string => {
    color = color.toUpperCase()
    switch (color) {
        case 'GREEN': return '\x1b[36m' + s + '\x1b[0m'
        case 'YELLOW': return '\x1b[33m' + s + '\x1b[0m'
        case 'BLUE': return '\x1b[34m' + s + '\x1b[0m'
        case 'PURPLE': return '\x1b[35m' + s + '\x1b[0m'
        default:
            throw new Error("Error No Matching Color Found");
    }
}


export const DEBUG_LOG = (...args: any[]) => {
    if (import.meta.env.PROD) return
    args.forEach((e) => {
        if (typeof (e) == 'string') {
            if ((<string>e).includes('F:')) {
                e = (<string>e).replace('F:', ANSI_COLORS('FunctionCall: ', 'purple'))
            }
            if ((<string>e).includes('D:')) {
                e = (<string>e).replace('D:', ANSI_COLORS('DATA: ', 'yellow'))
            }
            if ((<string>e).includes('TO:')) {
                e = (<string>e).replace('TO:', ANSI_COLORS('TODO: ', 'blue'))
            }
            if ((<string>e).includes('IN:')) {
                e = (<string>e).replace('IN:', ANSI_COLORS('INFORMATION: ', 'green'))
            }
            console.debug(e)
        }
        else {
            console.debug(e)
        }
    })
}
