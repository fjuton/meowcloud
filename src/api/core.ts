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
        if (meowcloud.webpack?.c[id] != undefined) {
            resolve(meowcloud?.webpack?.c[id])
        } else {
            setTimeout(async () => {
                await requireModule(id)
                resolve(meowcloud.webpack?.c[id])
            }, 100);
        }
    })
}