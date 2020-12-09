<template>
    <div>
        <div class="milestonesContainer">
            <div v-if="milestones">
                <span v-for="milestone in milestones" :key="milestone" class="imgContainer">
                    <img :src="require('@/assets/milestones/' + milestone + '.png')" class="milestone" @click="payingMilestone(milestone)">
                    <img v-if="gameData.milestones[milestone]" :src="getPlayerIcon(gameData.milestones[milestone])" class="playerImage"/>
                </span>
            </div>
        </div>
        <Modal v-if="paying" :payOption="payOption" @onAccept="accept()" @onCancel="paying = false" :title="'Mérföldkő: ' + milestone"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "@/components/utils/Modal";
import { UtilFunctions } from "@/utils.js";
import axios from "axios"
export default {
    components: {
        Modal
    },
    data() {
        return {
            paying: false,
            payOption: {},
            milestone: "",
        }
    },
    computed: {
        ...mapGetters({
            gameData: "gameData/getGameData",
            player: "players/getPlayer"
        }),
        milestones() {
            if(Object.keys(this.gameData).length != 0) {
                return Object.keys(this.gameData.milestones)
            } else {
                return null
            }
        }
    },
    methods: {
        getPlayerIcon(playerName) {
            return UtilFunctions.getPlayerIcon(playerName)
        },
        payingMilestone(milestone) {
            if(this.player.active && !this.gameData.milestones[milestone]) {
                this.milestone = milestone
                this.paying = true
                axios.put(this.$store.state.SERVER_URL + "/api/action/milestone/" + milestone, JSON.parse(JSON.stringify(this.player)), {
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then((res) => {
                    this.payOption = res.data;
                });
            }
        },
        accept() {
            axios.put(this.$store.state.SERVER_URL + "/api/action/milestone/" + this.milestone, JSON.parse(JSON.stringify(this.player)), {
                headers: {
                    'content-type': 'application/json'
                }
            })
            this.paying = false;
        }
    }
}
</script>

<style scoped>
.milestonesContainer {
    position: absolute;
    top: 1585px;
    left: 911px;
    transform: rotate(15deg);
    width: 650px;
}

.milestone {
    width: 130px;
}

.imgContainer{
    position: relative;
}

.playerImage {
    position: absolute;
    left: 41px;
    top: -42px;
    height: 50px;
    margin-bottom: -18px;
}
</style>