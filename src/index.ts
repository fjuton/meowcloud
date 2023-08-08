import { meowcloud } from "./api/core";
import * as plugins from "./plugins"
import { initializeHook } from "./webpack/hook";

initializeHook(() => {
    console.log("initialized!")
    console.log(meowcloud)

    console.info("meowcloud - intializing plugins")
    plugins.getPlugins().forEach(plugin => {
        try {
            plugin()
        } catch (err) {
            console.error(`meowcloud - ${err}`)
        }
    })
})
