import Vue from 'vue'
import App from '@/App'
import store from '@/store/index'
import router from '@/router/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'
import FullCalendar from 'vue-fullcalendar'

import axios from './config/httpConfig'
// import axios from 'axios'
// import * as globalFilter from './filters/filters'
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import vCharts from 'v-charts'

Vue.prototype.$http = axios
// Vue.prototype.$axios = axios
Vue.use(VueQuillEditor, /* { default global options } */)
Vue.use(vCharts);
Vue.use(FullCalendar);

// Object.keys(globalFilter).forEach(key => {
//     Vue.filter(key, globalFilter[key])
// })

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (!store.state.UserToken) {
        if (
            to.matched.length > 0 &&
            !to.matched.some(record => record.meta.requiresAuth)
        ) {
            next()
        } else {
            next({ path: '/login' })
        }
    } else {
        if (!store.state.permission.permissionList) {
            store.dispatch('permission/FETCH_PERMISSION').then(() => {
                next({ path: to.path })
            })
        } else {
            if (to.path !== '/login') {
                next()
            } else {
                next(from.fullPath)
            }
        }
    }
})

router.afterEach((to, from, next) => {
    var routerList = to.matched
    store.commit('setCrumbList', routerList)
    store.commit('permission/SET_CURRENT_MENU', to.name)
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
//安装插件：
// npm i element-ui -S
// npm install vuex --save
// npm install axios --sava
// npm install stylus-loader css-loader style-loader less-loader --save-dev
// npm install sass-loader --save;
// npm install node-sass --save;
// npm install vue-quill-editor --save
// npm i v-charts echarts -S
// npm install vue-fullcalendar
// npm install --save xlsx file-saver
