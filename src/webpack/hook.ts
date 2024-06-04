import { meowcloud } from "../api/core"

export const initializeHook = (cb : any) => {
    console.log("initializing hook")
  
    Object.defineProperty(Object.prototype, "p", {
        set(value) {
            // let's hook into this l.p="https://a-v2.sndcdn.com/" variable
            // https://a-v2.sndcdn.com/assets/53-aed4402d.js
            // there's two of them so let's also check if this unique function "e" exist
            if (!value.includes("https://a-v2.sndcdn.com/") || this.e == undefined) {
                Object.defineProperty(this, "p", {
                    configurable: true,
                    value: value
                })
                return
            }
    
            meowcloud.webpack = this
            this._value = value
            cb()
        },
    
        get() {return this._value},
        configurable: true,
    })
    
}

