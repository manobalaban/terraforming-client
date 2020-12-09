<template>
    <div class="lockedBackground">
        <div class="payingBox">
            {{title}}
            <div v-if="!payOption.possible" class="messageBox">NEM LEHETSÉGES</div>
            <div v-if="payOption.possible" class="messageBox">
                Ár: {{payOption.price}} / {{resourcesValue + collectionsValue}}
            </div>
            <div v-if="payOption.possible">
                <div v-for="(value, resource) in payOption.resourcesWithValue" :key="resource">
                    {{resourceName(resource)}} / {{value}} : 
                    <input type="number" class="resourceInput" min="0" :max="player.resources[resource]" value="0" @input="inputResource($event.target.value, resource)">
                </div>
                <div v-for="(value, collection) in payOption.onCardResourcesWithValue" :key="collection">
                    {{collection}} / {{value}} : 
                    <input type="number" class="resourceInput" min="0" :max="player.collections[collection].quantity" :value="0" @input="inputCollection($event.target.value, collection)">
                </div>
            </div>
            <Button @onClick="$emit('onAccept')" buttonText="ELFOGAD" width="120px" :active="payOption.price == resourcesValue + collectionsValue"/>
            <Button @onClick="cancel()" buttonText="MÉGSE" width="120px" :confirm="false"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "@/components/utils/Button";
import { UtilFunctions } from "@/utils.js"
export default {
    components: {
        Button
    },
    data() {
        return {
            resourcesValue: 0,
            collectionsValue: 0
        }
    },
    props: {
        payOption: {
            type: Object,
            required: true
        },
        title: String
    },
    computed: {
        ...mapGetters({
            player: "players/getPlayer"
        }),
    },
    methods: {
        inputResource(value, resourceName) {
            this.player.payingWith.resources[resourceName] = value;
            this.resourcesValue = 0;
            let resourceNames = Object.keys(this.player.payingWith.resources);
            for(var i = 0; i < resourceNames.length; i++) {
                this.resourcesValue += parseInt(this.player.payingWith.resources[resourceNames[i]]) * this.payOption.resourcesWithValue[resourceName]
            }
        },
        inputCollection(value, collection) {
            this.player.payingWith.collections[collection] = value;
            this.collectionsValue = 0;
            let collectionNames = Object.keys(this.player.payingWith.collections);
            for(var i = 0; i < collectionNames.length; i++) {
                this.collectionsValue += parseInt(this.player.payingWith.collections[collectionNames[i]]) * this.payOption.onCardResourcesWithValue[collection]
            }
        },
        resourceName(name) {
            return UtilFunctions.getResourceName(name);
        },
        cancel() {
            this.player.payingWith.resources = {};
            this.player.payingWith.collections = {};
            this.$emit('onCancel');
        }
    }
}
</script>

<style scoped>
.lockedBackground {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10000;
}

.payingBox {
    text-align: center;
    position: fixed;
    width: 300px;
    background: rgba(255, 255, 255, 0.5);
    top: calc(50% - 80px);
    left: calc(50% - 170px);
    padding: 20px;
    border-radius: 30px;
}

.messageBox {
    margin: 10px;
}
</style>