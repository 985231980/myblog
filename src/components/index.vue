<template>
  <div>
<!--    顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部-->
    <div>
      <div class="topBar">
      <span class="logo">
      <div style="float: left;margin-right: 0.5rem"><img src="../assets/logo.png"></div>
      <div style="float: left;line-height: 1.0rem;height: 5rem;vertical-align: middle;">
        <table>
          <tr><td>万彻个人站</td></tr>
          <tr><td>vanchor.top</td></tr>
        </table>
      </div>
      </span>
        <span class="space hidden-md-and-down">.</span>
        <span class="space hidden_menuBar3">.</span>
        <span class="hidden_menuBar2">首页</span>
        <span class="space hidden_menuBar3">.</span>
        <span class="hidden_menuBar2">个人中心</span>
        <span class="space hidden_menuBar3">.</span>
        <span class="space hidden_menuBar3">.</span>
        <span class="space hidden-lg-and-down">.</span>
        <span class="space hidden_menuBar3">.</span>
        <span class="hidden-md-and-down">
          <input class="input-round" placeholder="请输入感兴趣的内容"/>
      </span>
        <span class="hidden-md-and-down">更多</span>
        <span class="space hidden-lg-and-down">.</span>
        <div style="float: right;margin-right: 20%;width: 10rem" class="hidden-md-and-down">
          <button class="hidden-md-and-down"><span>登 录</span></button>
          <span class="hidden-md-and-down" style="margin-left: 1.5rem">注册</span>
          <span class="hidden-md-and-down" style="margin-left: 1.5rem">.</span>
        </div>
        <div style="float: right;margin-right: 10%">
        <span class="hidden_menuBar menuBar2">
          <img v-if="!searchIsOpen" @click="modifySearchIsOpen" class="menuBarIcon" src="../assets/iconfont/search.png" />
          <img v-else @click="modifySearchIsOpen" class="menuBarIcon" style="margin-right: 3%" src="../assets/iconfont/close.png" />
        </span>
        <span class="hidden_menuBar menuBar">
          <el-dropdown trigger="click" @visible-change="modifyIcon">
            <span class="el-dropdown-link">
              <img v-if="!menuBarIsOpen" class="menuBarIcon" src="../assets/iconfont/menuBar.png" />
              <img v-else class="menuBarIcon" src="../assets/iconfont/close.png" />
            </span>
<!--            下拉菜单-->
            <el-dropdown-menu slot="dropdown" class="dropdown_class">
              <div style="margin-left: 8%;">
                <img class="menuBarIconA" src="../assets/iconfont/user.png" style="vertical-align: middle;"/>
                <button class="login_button" style="vertical-align: middle;margin-left: 6%;"><span>登 录</span></button>
                 <button class="login_button" style="vertical-align: middle;margin-left: 4%;background: #777777!important;"><span>注 册</span></button>
              </div><hr>
              <div style="margin-left: 8%;">
                <img class="menuBarIconA" src="../assets/iconfont/home.png" style="vertical-align: middle;"/>
                <span class="menuBarText">个人中心</span>
              </div><hr>
              <div style="margin-left: 8%;">
                <img class="menuBarIconA" src="../assets/iconfont/star.png" style="vertical-align: middle;"/>
                <span class="menuBarText">只看关注</span>
              </div><hr>
              <div style="margin-left: 8%;">
                <img class="menuBarIconA" src="../assets/iconfont/refresh.png" style="vertical-align: middle;"/>
                <span class="menuBarText">刷新列表</span>
              </div><hr>
              <div style="margin-left: 8%;">
                <img class="menuBarIconA" src="../assets/iconfont/suggest.png" style="vertical-align: middle;"/>
                <span class="menuBarText">反馈意见</span>
              </div><hr>
              <div style="margin-left: 8%;">
                <img class="menuBarIconA" src="../assets/iconfont/info.png" style="vertical-align: middle;"/>
                <span class="menuBarText">关于站长</span>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
        </div>
      </div>
    </div>
    <div style="clear: both"></div>
    <div style="user-select: none;color: #FFFFFF">.</div>
<!--    隐藏搜索框-->
    <div class="inner">
      <div v-show="searchIsOpen">
        <div class="searchCard">
          <input><img style="vertical-align: middle" class="menuBarIcon searchIcon" src="../assets/iconfont/search.png">
        </div>
      </div>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      menuBarIsOpen:false,
      searchIsOpen:false
    }
  },
  methods:{
    modifyIcon(menuBarIsOpen){
      this.menuBarIsOpen = menuBarIsOpen;
    },
    modifySearchIsOpen(){
      this.searchIsOpen = this.searchIsOpen?false:true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    margin: 0;
  }
  .topBar{
    position: fixed;/*相对浏览器窗口进行定位*/
    user-select: none;
    background: #FFFFFF;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    height: 5rem;
    padding-left: 12%;
    border: 0px;
    width: 88%;
    box-shadow: 0 0 1rem #777777;
  }
  .topBar span{
    height: 5rem;
    line-height: 5rem;
    margin-left: 2%;
  }
  .topBar button{
    width: 5rem;
    height: 2rem;
    vertical-align:middle;
    background: #37a1f9;
    color: #FFFFFF;
    border-radius: 1rem;
    border: none;
  }
  .topBar button span{
    height: 1rem;
    font-weight: 0;
    line-height: 1rem;
    font-size: 1rem;
  }
  .login_button{
    width: 5rem;
    height: 2rem;
    vertical-align:middle;
    background: #37a1f9;
    color: #FFFFFF;
    border-radius: 1rem;
    border: none;
    font-size: 1rem;
  }
  .topBar table{
    height: 3rem;
    margin-top: 16%;
    vertical-align: middle;
    text-align: center;
    font-size: 1rem;
    color: #777777;
  }
  .logo img{
    width: 3rem;
    vertical-align: middle;
    text-align: center;
  }
  .space{
    user-select: none;
    color: #FFFFFF;
  }
  .input-round {
    width: 20%!important;
    border-radius:10rem;
    padding-left: 2rem;
    border: 0.1rem solid #777777;
    line-height: 2.4rem;
    outline: none;
    display: inline-block;
    font-size: 1rem;
  }
  .inner{
    margin-top: 4.6rem
  }
  .dropdown_class{
    padding: 3%!important;
    width: 60% !important;
    border-radius: 0.8rem!important;
    box-shadow: 0 0 1rem #777777!important;
  }
  .dropdown_class hr{
    width: 80%;
    margin: auto;
    border: 0.05rem solid #777777;
    border-radius: 1rem;
    background: #777777;
  }
  @media screen and (min-width: 1200px) {
    .hidden_menuBar {
      display: none;
    }
  }
  @media screen and (max-width: 1400px) {
    .hidden_menuBar2 {
      display: none;
    }
  }
  @media screen and (max-width: 1600px) {
    .hidden_menuBar3 {
      display: none;
    }
    .searchCard{
      position: fixed;/*相对浏览器窗口进行定位*/
      border-radius: 1rem!important;
      box-shadow: 0 0 1rem #777777!important;
      width: 98% !important;
      margin-left: 1%;
      height:4rem;
    }
    .searchCard input{
      border-radius: 3rem!important;
      border:0.1rem solid #777777;
      outline: none;
      display: inline-block;
      font-size: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: #777777;
      height: 2.8rem;
      line-height: 4rem;
      width: 74%;
      margin-right: 3%;
      margin-left: 6%;
      vertical-align: middle;
    }
    .menuBarText{
      margin-left: 12%;
      font-size: 1.6rem;
      font-weight: 900;
      color: #777777;
    }
    .menuBar{
      margin-right: -80%!important;
      height: 3rem;
      line-height: 3rem;
      vertical-align: middle;
      margin-top: 10%;
      float: right;
    }
    .menuBar2{
      margin-right: 120%!important;
      height: 3rem;
      line-height: 3rem;
      vertical-align: middle;
      margin-top: 10%;
      float: right;
    }
    .menuBarIcon{
      width: 4rem;
    }
    .menuBarIconA{
      width: 5rem;
    }
  }
  @media screen and (max-width: 800px) {
    .logo img{
      width: 2rem;
      vertical-align: middle;
      text-align: center;
    }
    .searchCard{
      border-radius: 1rem!important;
      box-shadow: 0 0 1rem #777777!important;
      width: 98% !important;
      margin-left: 1%;
      height:4rem;
    }
    .searchCard input{
      border-radius: 3rem!important;
      border:0.1rem solid #777777;
      outline: none;
      display: inline-block;
      font-size: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: #777777;
      height: 2.8rem;
      line-height: 3rem;
      width: 74%;
      margin-right: 3%;
      margin-left: 6%;
      vertical-align: middle!important;
      margin-top: 0.4rem;
    }
    .menuBarText{
      margin-left: 10%;
      font-size: 1.4rem;
      font-weight: 900;
      color: #777777;
    }
    .topBar table{
      height: 2rem;
      margin-top: 20%;
      margin-left: -5%;
      vertical-align: middle;
      text-align: center;
      font-size: 1rem;
      color: #777777;
    }
    .menuBar{
      height: 3rem;
      line-height: 3rem;
      vertical-align: middle;
      margin-top: 20%;
      float: right;
    }
    .menuBar2{
      margin-right: 100%!important;
      height: 3rem;
      line-height: 3rem;
      vertical-align: middle;
      margin-top: 20%;
      float: right;
    }
    .menuBarIcon{
      width: 3rem;
    }
    .menuBarIconA{
      width: 4rem;
    }
    .inner{
      margin-top: 4.6rem
    }
  }
  @media screen and (max-width: 600px) {
    .logo img{
      width: 1.6rem;
      vertical-align: middle;
      text-align: center;
    }
    .searchCard{
      border-radius: 1rem!important;
      box-shadow: 0 0 1rem #777777!important;
      width: 98% !important;
      margin-left: 1%;
      height:2.8rem;
    }
    .searchCard input{
      border-radius: 3rem!important;
      border:0.1rem solid #777777;
      outline: none;
      display: inline-block;
      font-size: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: #777777;
      height: 1.8rem;
      line-height: 3rem;
      width: 66%;
      margin-right: 3%;
      margin-left: 8%;
      vertical-align: middle!important;
    }
    .searchIcon{
      margin-top: 0.4rem;
    }
    .menuBarText{
      margin-left: 6%;
      font-size: 1.2rem;
      font-weight: 900;
      color: #777777;
      vertical-align: middle;
    }
    .login_button{
      width: 3rem;
      height: 1.6rem;
      font-weight: 900;
      font-size: 0.8rem;
      vertical-align:middle;
      background: #37a1f9;
      color: #FFFFFF;
      border-radius: 1rem;
      border: none;
    }
    .menuBarIconA{
      width: 2.4rem;
    }
    .topBar{
      position: fixed;/*相对浏览器窗口进行定位*/
      user-select: none;
      background: #FFFFFF;
      border-bottom-left-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      height: 4rem;
      padding-left: 12%;
      border: 0px;
      width: 88%;
      box-shadow: 0 0 1rem #777777;
    }
    .topBar span{
      height: 4rem;
      line-height: 4rem;
      margin-left: 2%;
    }
    .topBar button{
      width: 4rem;
      height: 2rem;
      vertical-align:middle;
      background: #37a1f9;
      color: #FFFFFF;
      border-radius: 1rem;
      border: none;
    }
    .topBar button span{
      height: 2rem;
      font-weight: 0;
      line-height: 1rem;
      font-size: 1rem;
    }
    .topBar table{
      height: 1rem;
      vertical-align: middle;
      text-align: center;
      font-size: 1rem;
      color: #777777;
      margin-top: 12%;
      margin-left: -5%;
    }
    .menuBar{
      height: 3rem;
      line-height: 3rem;
      vertical-align: middle;
      margin-top: 20%;
      float: right;
    }
    .menuBar2{
      margin-right: 80%!important;
      height: 3rem;
      line-height: 3rem;
      vertical-align: middle;
      margin-top: 20%;
      float: right;
    }
    .menuBarIcon{
      width: 2rem;
    }
    .inner{
      margin-top: 3.4rem
    }
  }
  @media screen and (max-width: 310px) {
    .topBar table{
      display: none;
    }
    .searchCard input{
      border-radius: 3rem!important;
      border:0.1rem solid #777777;
      outline: none;
      display: inline-block;
      font-size: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: #777777;
      height: 1.8rem;
      line-height: 3rem;
      width: 60%;
      margin-right: 3%;
      margin-left: 8%;
      vertical-align: middle!important;
    }
  }
  @media screen and (max-width: 290px) {
    .login_button{
      width: 2.6rem;
      height: 1.6rem;
      font-weight: 900;
      font-size: 0.7rem;
      vertical-align:middle;
      background: #37a1f9;
      color: #FFFFFF;
      border-radius: 1rem;
      border: none;
    }
  }
  /*像素非常低*/
  @media screen and (max-width: 248px) {
    .menuBarIconA{
      display: none;
    }
    .searchCard input{
      border-radius: 3rem!important;
      border:0.1rem solid #777777;
      outline: none;
      display: inline-block;
      font-size: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      color: #777777;
      height: 1.8rem;
      line-height: 3rem;
      width: 50%;
      margin-right: 3%;
      margin-left: 8%;
      vertical-align: middle!important;
    }
  }
</style>