import Vue from "vue"
import Vuex from "vuex"
import players from "./modules/players"
import gameData from "./modules/gameData"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        SERVER_URL: "http://192.168.0.171:9000",
        playerData: "",
    },
    modules: {
        players,
        gameData
    },
    mutations: {
        setItems(state, {resource, items}) {
            state[resource].items = items
        },
    },
})