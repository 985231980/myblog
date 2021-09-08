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
          <span class="hidden-md-and-down" style="margin-left: 1.5rem">{{ a }}</span>
        </div>
        <div style="float: right;margin-right: 20%">
        <span class="hidden_menuBar menuBar">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img class="menuBarIcon" src="../assets/iconfont/menuBar.png" />
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdown_class">
              <el-dropdown-item icon="el-icon-plus">选项测试</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus">选项测试</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">选项测试</el-dropdown-item>
              <el-dropdown-item icon="el-icon-check">选项测试</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check">选项测试</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
        </div>
      </div>
    </div>
    <div style="clear: both"></div>
    <div style="user-select: none;color: #FFFFFF">.</div>
    <div class="inner"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
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
    margin-top: 4rem
  }
  .dropdown_class{
    width: 60% !important;
    border-radius: 0.8rem!important;
    box-shadow: 0 0 1rem #777777!important;
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
    .menuBar{
      margin-right: -80%!important;
      height: 3rem;
      line-height: 3rem;
      vertical-align: middle;
      margin-top: 10%;
      float: right;
    }
    .menuBarIcon{
      width: 4rem;
    }
  }
  @media screen and (max-width: 800px) {
    .logo img{
      width: 2rem;
      vertical-align: middle;
      text-align: center;
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
      margin-right: -80%!important;
      height: 3rem;
      line-height: 3rem;
      vertical-align: middle;
      margin-top: 28%;
      float: right;
    }
    .menuBarIcon{
      width: 3rem;
    }
  }
  @media screen and (max-width: 600px) {
    .logo img{
      width: 1.6rem;
      vertical-align: middle;
      text-align: center;
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
    .inner{
      margin-top: 3rem
    }
    .menuBar{
      margin-right: -80%!important;
      height: 3rem;
      line-height: 3rem;
      vertical-align: middle;
      margin-top: 28%;
      float: right;
    }
    .menuBarIcon{
      width: 2rem;
    }
  }
</style>