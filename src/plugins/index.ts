import { copyrightSeeker } from "./copyrightSeeker"

export * from "."

const plugins : any[] = [
    copyrightSeeker,
]

export const getPlugins = () => {return plugins}