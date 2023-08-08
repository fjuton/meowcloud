
import { registerSongEvent } from "../api/song";

/*
    // basically skips all empty samples
*/
export const copyrightSeeker = () => {
    const SAMPLE_THRESHOLD = 10
    registerSongEvent("change:currentSound", async (song : {current?: any}) => {
        try {
            let body = await fetch(`${song?.current?.attributes?.waveform_url}`, {
                method: "GET"
            })
    
            const waveform : {width?: number, height?: number, samples?: number[]} = await body.json()
            let samples = waveform?.samples?.slice(0, waveform.samples.findIndex(value => value > SAMPLE_THRESHOLD)) ?? []
            console.log(samples.length, waveform.samples?.length, song?.current?.getFixedDuration())
            song?.current?.seek((samples.length / (waveform.samples?.length ?? 1)) * song?.current?.getFixedDuration())
        } catch (err) {
            console.error("meowcloud - couldn't fetch waveform :3")
        }
    })
}

