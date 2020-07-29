import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [
        {
        path: "/",
        alias: "/playersList",
        name: "playersList",
        component: () => import("./components/PlayersList")
        },
        {
            path: "/clubsList",
            name: "clubsList",
            component: () => import("./components/ClubsList")
        },
        {
            path: "/club/:club",
            name: "club",
            component: () => import("./components/Club")
        },
        {
            path: "/club/effectif/:club",
            name: "effectif",
            component: () => import("./components/Effectif")
        },
        {
            path: "/club/budget/:club",
            name: "budget",
            component: () => import("./components/Budget")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./components/Login")
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import("./components/Admin")
        },
    ]
})