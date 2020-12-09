<template>
    <div>
        <div class="awardsContainer">
            <div v-if="awards">
                <span v-for="award in awards" :key="award" class="imgContainer">
                    <img :src="require('@/assets/awards/' + award + '.png')" class="award" @click="payingAward(award)">
                    <img v-if="gameData.awards[award]" src="@/assets/playerImages/standingCube.png" class="playerImage"/>
                </span>
            </div>
        </div>
        <Modal v-if="paying" :payOption="payOption" @onAccept="accept()" @onCancel="paying = false" :title="'Díj: ' + award"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "@/components/utils/Modal";
import axios from "axios"
export default {
    components: {
        Modal
    },
    data() {
        return {
            paying: false,
            payOption: {},
            award: "",
        }
    },
    computed: {
        ...mapGetters({
            gameData: "gameData/getGameData",
            player: "players/getPlayer"
        }),
        awards() {
            if(Object.keys(this.gameData).length != 0) {
                return Object.keys(this.gameData.awards)
            } else {
                return null
            }
        }
    },
    methods: {
        payingAward(award) {
            if(this.player.active && !this.gameData.awards[award]) {
                this.award = award
                this.paying = true
                axios.put(this.$store.state.SERVER_URL + "/api/action/award/" + award, JSON.parse(JSON.stringify(this.player)), {
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then((res) => {
                    this.payOption = res.data;
                });
            }
        },
        accept() {
            axios.put(this.$store.state.SERVER_URL + "/api/action/award/" + this.award, JSON.parse(JSON.stringify(this.player)), {
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
.awardsContainer {
    position: absolute;
    top: 1585px;
    left: 2274px;
    transform: rotate(-15deg);
    width: 650px;
}

.award {
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