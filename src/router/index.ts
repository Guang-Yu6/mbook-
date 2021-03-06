import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Money from "@/views/Money.vue";
import Statistics from "@/views/Statistics.vue";
import Labels from "@/views/Labels.vue";
import Not from "@/views/Not.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/money'  // 重定向
    },
    {
        path: '/money',
        component: Money
    },
    {
        path: '/labels',
        component: Labels
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '*',
        component: Not
    },
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    routes
})

export default router
