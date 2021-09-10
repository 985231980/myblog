import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
//cnpm install vuex --save
//必须安装vuex-presist：cnpm install --save vuex-persist
Vue.use(Vuex);

//初始化，存到localStorage
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
const index = new Vuex.Store({
    //state里面是防止刷新丢失的
    state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')):{
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        userData:null,
        temp:{
            isLoginPage:false,
            isLogoutPage:false,
        },
    },
    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin (state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
            state.userData = user;
        }
    },

    //配置插件
    plugins: [vuexLocal.plugin]
});

// 使用 export default 封装，让外部可以访问
export default index;