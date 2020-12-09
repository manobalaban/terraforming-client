import Vue from "vue"
import Router from "vue-router"

import PageLogin from "@/pages/PageLogin"
import PageTable from "@/pages/PageTable"
import PagePlayerData from "@/pages/PagePlayerData"
import PageAdmin from "@/pages/PageAdmin"
import Sandbox from "@/Sandbox"

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: "/",
            name: "PageLogin",
            component: PageLogin
        },
        {
            path: "/table",
            name: "PageTable",
            component: PageTable
        },
        {
            path: "/playerData",
            name: "PagePlayerData",
            component: PagePlayerData
        },
        {
            path: "/admin",
            name: "PageAdmin",
            component: PageAdmin
        },
        {
            path: "/sandbox",
            name: "Sandbox",
            component: Sandbox
        }
    ],
    mode: "history"
})

export default router