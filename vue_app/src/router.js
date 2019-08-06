//router.js 引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import HelloContainer from "./components/HelloWorld.vue"
//组件
import Home from "./components/exin/Home.vue"
import Chat from "./components/exin/common/Chat.vue"
import TitleBar from "./components/exin/common/TitleBar.vue"
import TabBarIcon from "./components/exin/common/TabBarIcon.vue"
import Message from "./components/exin/common/Message.vue"
import Discover from "./components/exin/common/Discover.vue"
import AddressList from "./components/exin/common/AddressList.vue"
import Mine from "./components/exin/common/Mine.vue"
import Alter from "./components/exin/common/Alter.vue"



Vue.use(Router)
//配置路径
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:'/Home',component:Home},
    {path:'/Chat',component:Chat},
    {path:'/TitleBar',component:TitleBar},
    {path:'/TabBarIcon',component:TabBarIcon},
    {path:'/Message',component:Message},
    {path:'/Discover',component:Discover},
    {path:'/AddressList',component:AddressList},
    {path:'/Mine',component:Mine},
    {path:'/Alter',component:Alter},
  ]
})
