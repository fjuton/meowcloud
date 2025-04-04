interface Webpack {
    c: WebpackModule[]   
}

interface WebpackModule {
    exports: any,
    l: boolean,
    i: number
}

interface Meowcloud {
    webpack?: Webpack
}

export let meowcloud : Meowcloud = {}
export const requireModule = async (id : number) : Promise<WebpackModule|undefined> => {
    return new Promise((resolve) => {
        const checkForModule = () => meowcloud.webpack?.c[id] === undefined ? setTimeout(checkForModule) : resolve(meowcloud.webpack?.c[id])
        checkForModule()
    })
}