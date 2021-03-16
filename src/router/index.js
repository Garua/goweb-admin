import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin'
import Login from "@/views/Login"
import Index from '@/components/admin/Index'
import AddArt from '@/components/article/AddArt'
import ArtList from '@/components/article/ArtList'
import CateList from '@/components/category/CateList'
import UserList from '@/components/user/UserList'
Vue.use(VueRouter)


const routes = [
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        children:[
            {path:'/index',component:Index},
            {path:'/addart',component:AddArt},
            {path:'/artlist',component:ArtList},
            {path:'/catelist',component:CateList},
            {path:'/userlist',component:UserList},
        ]
    },
    {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Login
    }
]

const router = new VueRouter({
    routes
})
// 路由导航守卫
// router.beforeEach((to,from,next)=>{
//     const token = window.sessionStorage.getItem("token")
//     // 对应上面的routes中的path,to.name对应上面的name
//     if(to.path ==='/login'){
//         return next()
//     }
//     // 未携带token且访问admin页面，强制跳到login页面
//     if(!token && to.path === '/admin'){
//         next('/login')
//     }else{
//         next()
//     }
// })

export default router
