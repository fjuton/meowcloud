
import { registerSongEvent } from "../api/song";

/*
    // basically skips all empty samples
*/
export const copyrightSeeker = () => {
    const SAMPLE_THRESHOLD = 10
    registerSongEvent("change:currentSound", async (song : {current?: any}) => {
        console.log(`meowcloud - song switched`)
        console.log(song)
        try {
            let body = await fetch(`${song?.current?.attributes?.waveform_url}`, {
                method: "GET"
            })
    
            const waveform : {width?: number, height?: number, samples?: number[]} = await body.json()
            let samples = waveform?.samples?.slice(0, waveform.samples.findIndex(value => value > SAMPLE_THRESHOLD)) ?? []
            if (samples.length < 50) // copyrighted moments seems to have more than that
                return

            // wait until it starts playing so we don't get overriden by the actual player?
            await new Promise((resolve) => {
                const waitForSong = () => {
                    if (song?.current?.getCurrentSound().isPlaying()) return resolve({})
                    setTimeout(waitForSong, 500);
                }

                waitForSong()
            });

            song?.current?.getCurrentSound().seek((samples.length / (waveform.samples?.length ?? 1)) * song?.current?.getFixedDuration())
        } catch (err) {
            console.error("meowcloud - couldn't fetch waveform :3")
        }
    })
}

