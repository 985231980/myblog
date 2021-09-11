import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import 'element-ui/lib/theme-chalk/display.css';//断点消失
import echarts from 'echarts'

var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8001'
// axios.defaults.baseURL = 'http://39.104.207.113:8443'


Vue.use(Element)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')