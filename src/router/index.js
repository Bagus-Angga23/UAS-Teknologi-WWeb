import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ikan from '../views/Ikan.vue'
import IkanDetail from '../views/IkanDetail.vue'
import Keranjang from '../views/Keranjang.vue'
import PesananSukses from '../views/PesananSukses.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ikan',
        name: 'Ikan',
        component: Ikan
    },
    {
        path: '/ikan/:id/',
        name: 'IkanDetail',
        component: IkanDetail
    },
    {
        path: '/keranjang',
        name: 'Keranjang',
        component: Keranjang
    },
    {
        path: '/pesanan-sukses',
        name: 'PesananSukses',
        component: PesananSukses
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router