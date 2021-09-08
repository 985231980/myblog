import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import 'element-ui/lib/theme-chalk/display.css';//断点消失

Vue.use(Element)

Vue.config.productionTip = false

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