import axios from "axios"

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        getPhase: (state) => {
            return state.items.actualPhase;
        },
        getGameData: (state) => {
            return state.items
        }
    },
    actions: {
        fetchGameData({state, commit}) {
            return axios(this.state.SERVER_URL + "/api/gameData")
            .then(res => {
                const gameData = res.data
                commit("setItems",  {resource: "gameData", items: gameData}, {root: true})
                return state.item
            })
        }
    }
}