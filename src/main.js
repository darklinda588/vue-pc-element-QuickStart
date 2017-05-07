// 所有需要加载的控件或者组件，引入方式都为'import'
// 所有的运行打包方式，全部都在 webpack.base.conf 里设置.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Index from './router/index'

// 这里是引入各种css less
import 'element-ui/lib/theme-default/index.css'
import './style/index.css'
import './style/home.less'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: Index }
  ]
})

/* eslint-disable no-new */
const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
