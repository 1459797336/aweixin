import Vue from 'vue'
import App from './App.vue'
import router from './router'
//以上三行不要动保存原来位置
//原因:引入有序
//第三方组件库在下面引入
//1：完整引入mint-ui
import MintUi from 'mint-ui'
//2：单引引入mint-ui样式
import'mint-ui/lib/style.css'
//3:将mint-ui注册vue
Vue.use(MintUi);
//4:引入图标字体样式文件
//import './font/iconfont.css'
//5.引入axios.js文件
import axios from "./axios"
//6.引入vuex
import Vuex from "vuex"
//7.注册vuex组件
Vue.use(Vuex)


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
