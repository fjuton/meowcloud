import { requireModule } from "./core"

export const registerSongEvent = async (eventName : string, callback : any) => {
    // to find this magic module need to look for 
    // change:currentsound
    // TODO: make this automatically fetch the module or something
    let mod = await requireModule(21)
    mod?.exports?.on(eventName, (song : any) => {
        callback(song)
    })
}