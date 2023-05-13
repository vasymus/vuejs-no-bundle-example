export const langStore = Vue.reactive({
    state: {},
    setLangItems(keyValueMap) {
        for (let key in keyValueMap) {
            this.state[key] = keyValueMap[key]
        }
    }
})

// for test
window.___langStore = langStore
