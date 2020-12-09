import axios from "axios"

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        getPlayerData: (state) => {
            return state.items.filter(player => player.name == localStorage.getItem("playerData"))[0];
        },
        getPlayer: (state) => {
            return state.items.filter(player => player.name == localStorage.getItem("playerName"))[0];
        },
        getPlayers: (state) => {
            return state.items;
        }
    },
    actions: {
        fetchPlayers({state, commit}) {
            return axios(this.state.SERVER_URL + "/api/players")
            .then(res => {
                const players = res.data
                commit("setItems", {resource: "players", items: players}, {root: true})
                return state.item
            })
        },
    },
}