import { meowcloud } from "./api/core";
import * as plugins from "./plugins"
import { initializeHook } from "./webpack/hook";

initializeHook(() => {
    console.log("initialized!")
    console.info("meowcloud (v0.01) - intializing plugins")
    plugins.getPlugins().forEach(plugin => {
        try {
            plugin()
        } catch (err) {
            console.error(`meowcloud - ${err}`)
        }
    })

    console.log("finished initialization <3")
})
