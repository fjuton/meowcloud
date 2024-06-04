import { requireModule } from "./core"

export const registerSongEvent = async (eventName : string, callback : any) => {
    let mod = await requireModule(26)
    mod?.exports?.on(eventName, (song : any) => {
        callback(song)
    })
}