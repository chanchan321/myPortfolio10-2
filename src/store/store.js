import {create} from 'zustand'
import {devtools, persist , createJSONStorage} from 'zustand/middleware'

let store = (set) =>({
    theme:'dark',
    changeTheme:(value) =>
    set((state) => ({theme:value}))
})

store = devtools(store)
store = persist(store, {name: 'settings', storage: createJSONStorage(() => localStorage)})

const useStore = create(store)

export default useStore;