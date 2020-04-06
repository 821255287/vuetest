import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import register from '../components/register.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

// const routes = [
//     { path: '/', redirect: '/login' },
//     { path: "/login", component: login }, { path: '/register', component: register },
//     { path: "/home", component: home }

// ]

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: "/login", component: login }, { path: '/register', component: register },
        { path: "/home", component: home }

    ]
})

router.beforeEach((to, from, next) => {
    //to 将要访问的路径
    //from 代表从哪个路径跳转而来
    //next 是一个函数，表示放行
    if (to.path === '/login') return next();
    //获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()

})

export default router