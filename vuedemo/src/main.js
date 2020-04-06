import Vue from 'vue'
import App from './App.vue'
import router from './router'

//导入全局样式
import './assets/css/global.css'
import Elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Elementui)
Vue.config.productionTip = false

// 导入字体图标
import '../src/assets/font-awesome-4.7.0/css/font-awesome.min.css'

import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'http://106.12.11.162:8888/api/private/v1/'
Vue.prototype.$http = axios


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')