import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import login from "../components/login.vue"
import home from "../components/Home.vue"

const router = new VueRouter({
    routes: [{
            path: '/',    //URL为http://localhost:8080/#/切换Home组件0
            name: 'home',
            component: home,
            beforeEnter:(to, from, next) => {
                before(to, from, next)
              }
        },{
            path: '/login',    //URL为http://localhost:8080/#/切换Home组件0
            name: 'login',
            component: login
        },
    ]
})
function before(to, from, next){
    if(sessionStorage.getItem('token')){
        next();
    }else{
        router.push({ path: '/login' })
    }
}
export default router