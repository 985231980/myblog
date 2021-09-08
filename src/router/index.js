import Vue from "vue";
import Router from "vue-router";
import index from "@/components/index";
import demo from "@/components/demo";

Vue.use(Router);

export default new Router({
    routes: [
        {
          path:'/',
          name:'首页index',
          redirect:'/index'
        },{
            path : '/index',
            name : '首页index',
            meta:{title:'万彻的小站'},
            component :  index,
            children:[
                {
                    path : '/a',
                    name : '2',
                    meta:{title: '12'},
                    component :  demo
                },
            ]
        },
    ],
    mode: "history"
})