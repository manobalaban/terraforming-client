<template>
    <div style="color: white">
        <!--img v-for="n in cards" :key="n" :src="require('@/assets/cards/' + n + '.png')" style="position: absolute" :id="'img' + n"/>
        <input type="button" value="VALAMI" @click="cardsCheck()" style="position: absolute; right: 0;"/-->

        <!--img v-for="n in corps" :key="n" :src="require('@/assets/preludes/' + n + '.png')" style="position: absolute" :id="'img' + n"/>
        <input type="button" value="VALAMI" @click="corpsCheck()" style="position: absolute; right: 0;"/-->
    </div>
</template>

<script>
export default {
    components: {
    },
    computed: {
        cards() {
            const result = []
            //345-ig
            for(var i=318; i<346; i++){
                if(i == 209 || i == 210 || i == 211 || i == 212 || i == 260 || i == 261) {
                    console.log("egyébb ---> " + i)
                } else {
                    result.push(i)
                }
            }
            return result
        },
        //cégbirodalmak 38-ig, kezdetek 35-ig
        corps() {
            const result = []
            for(var i=1; i<36; i++) {
                if(!(i == 12 || i == 26)) {
                    result.push(i)
                }
            }
            return result
        }
    },
    methods: {
        cardsCheck() {
            for(var i=318; i<346; i++) {
                if(!(i == 209 || i == 210 || i == 211 || i == 212 || i == 260 || i == 261)) {
                    var element = document.getElementById("img" + i).offsetHeight;
                    if(element != 1000) {
                        console.log(i)
                    }
                }
            }
            console.log("vége")
        },
        corpsCheck() {
            for(var i=1; i<36; i++) {
                if(!(i == 12 || i == 26)) {
                    var element = document.getElementById("img" + i).offsetWidth;
                    if(element != 1250) {
                        console.log(i)
                    }
                }
            }
            console.log("vége")
        }
    }
}
</script>

<style scoped>

</style>