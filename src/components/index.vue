<template>
  <div style="font-family: 'Microsoft JhengHei'">
<!--    顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部顶部-->
    <div>
      <div class="topBar">
      <span class="logo">
      <div style="float: left;margin-right: 0.5rem"><img src="../assets/iconfont/logo.png"></div>
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
        <div v-if="!isTokenHave" style="float: right;margin-right: 18%;width: 12rem" class="hidden-md-and-down">
          <button class="hidden-md-and-down" @click="openLoginDialog"><span>登 录</span></button>
          <span class="hidden-md-and-down" style="margin-left: 1.5rem;" @click="toOpenRegist">注 册</span>
          <span class="space hidden-md-and-down" style="margin-left: 1.5rem">.</span>
        </div>
        <div v-if="isTokenHave" style="float: right;margin-right: 12%;width: 20rem;" class="hidden-md-and-down">
          <img v-if="isTokenHave" src="../assets/iconfont/user.png" style="vertical-align: middle;width: 3.4rem"/>
          <el-dropdown>
            <span class="el-dropdown-link">
              <span style="font-size: 1.4rem">{{$store.state.userData.name}}</span>
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdown_class" style="width: 10rem!important;padding: 0.4rem 0rem 0.4rem 0rem!important;text-align: center">
              <div style="user-select: none;cursor: pointer;width: 8rem;" @click="toLogOut">
                <img src="../assets/iconfont/logout.png" style="vertical-align: middle;width: 2rem"/>
                <span class="menuBarText" style="color: #F56C6C!important;font-size: 1rem!important;">退出登录</span>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
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
                <img v-if="!isTokenHave" class="menuBarIconA" src="../assets/iconfont/user.png" style="vertical-align: middle;"/>
                <img v-if="isTokenHave" class="menuBarIconA" src="../assets/iconfont/user.png" style="vertical-align: middle;"/>
                <button v-if="!isTokenHave" class="login_button" style="vertical-align: middle;margin-left: 6%;" @click="openLoginDialog"><span>登 录</span></button>
                 <button v-if="!isTokenHave" class="login_button" style="vertical-align: middle;margin-left: 4%;background: #777777!important;" @click="toOpenRegist"><span>注 册</span></button>
                <span v-if="isTokenHave" class="menuBarText">zhangsan</span>
              </div><hr>
              <div v-if="isTokenHave" style="margin-left: 8%;">
                <img class="menuBarIconA" src="../assets/iconfont/home.png" style="vertical-align: middle;"/>
                <span class="menuBarText">个人中心</span>
              </div><span v-if="isTokenHave"><hr></span>
              <div v-if="isTokenHave" style="margin-left: 8%;">
                <img class="menuBarIconA" src="../assets/iconfont/star.png" style="vertical-align: middle;"/>
                <span class="menuBarText">只看关注</span>
              </div><span v-if="isTokenHave"><hr></span>
              <div style="margin-left: 8%;" @click="$router.go(0)">
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
              </div><span v-if="isTokenHave"><hr></span>
              <div v-if="isTokenHave" style="margin-left: 8%;" @click="toLogOut">
                <img class="menuBarIconA" src="../assets/iconfont/logout.png" style="vertical-align: middle;"/>
                <span class="menuBarText" style="color: #F56C6C!important;">退出登录</span>
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
<!--    隐藏登录框-->
    <div class="jackRadius">
      <el-dialog
          class="login_dialog"
          style="margin-top: 6rem;"
          center="true"
          width="90%"
          v-model="loginForm"
          :visible.sync="loginDialog">
        <template slot="title">
          <div style="color: #606266; font-size: 25px; font-weight: 900">用户登录</div>
          <div style="color: #909399;">登录后才能发表评论和博客哟</div>
        </template>
        <div>
          <input class="input-round2" placeholder="请输入手机号" v-model="loginForm.phoneNum" style="margin-left: 10%;">
        </div>
        <div>
          <input class="input-round2" placeholder="请输入密码" v-model="loginForm.password" style="margin-left: 10%;">
        </div>
        <div style="width: 80%;margin-left: 10%;margin-top: -1rem;margin-bottom: 2.8rem;">
          <div style="text-align: left;float: left;"><el-button type="text" @click="toOpenRegist">注册账号</el-button></div>
          <div style="text-align: right;float: right"><el-button type="text" @click="toOpenRegist">忘记密码</el-button></div>
        </div>
        <div style="clear: both"></div>
        <div style="">
          <el-button v-if="!isLoginLoading" type="primary" @click="toSubmitLogin" style="border-radius: 10rem;width: 60%;margin-left: 20%;">登  录</el-button>
          <el-button v-else type="primary" disabled @click="toSubmitLogin" style="border-radius: 10rem;width: 60%;margin-left: 20%;">
            登陆中&nbsp;<i class="el-icon-loading"></i>
          </el-button>
        </div>
      </el-dialog>
    </div>
<!--    隐藏注册框-->
    <div class="jackRadius">
      <el-dialog
          class="login_dialog"
          style="margin-top: 6rem;"
          center="true"
          width="90%"
          v-model="registerForm"
          :visible.sync="registDialog">
        <template slot="title">
          <div style="color: #606266; font-size: 25px; font-weight: 900">用户注册</div>
          <div style="color: #909399;">海内存知己，天涯若比邻</div>
        </template>
        <div>
          <input class="input-round2" placeholder="请输入手机号" v-model="registerForm.phoneNum" style="margin-left: 10%;">
        </div>
        <div>
          <input class="input-round3" placeholder="验证码" v-model="registerForm.checkCode" style="margin-left: 10%;">
          <button class="input-round4" @click="toGetPhoneCode" v-if="canGetPhoneCode" style="margin-left: 2%;">获取</button>
          <button class="input-round4" v-else style="margin-left: 2%;background: #909399;cursor:no-drop">获取({{second}})</button>
        </div>
        <div>
          <input class="input-round2" placeholder="请设置密码(6-18位)" v-model="registerForm.password" style="margin-left: 10%;">
        </div>
        <div style="width: 80%;margin-left: 10%;margin-top: -1rem;margin-bottom: 2rem;">
          <div style="text-align: left;float: left;"><el-button type="text" @click="openLoginDialog">登录账号</el-button></div>
          <div style="text-align: right;float: right"><el-button type="text" @click="openLoginDialog">无法注册</el-button></div>
        </div>
        <div style="clear: both"></div>
        <div style="">
          <el-button type="primary" style="border-radius: 10rem;width: 60%;margin-left: 20%;">注  册</el-button>
        </div>
      </el-dialog>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data(){
    return{
      menuBarIsOpen:false,
      searchIsOpen:false,
      loginDialog:false,
      registDialog:false,
      //获取验证码↓↓↓↓↓↓
      canGetPhoneCode:true,
      second: 60,
      timer: null,
      //获取验证码↑↑↑↑↑↑
      isTokenHave:localStorage.getItem('Authorization')==null||localStorage.getItem('Authorization')==''?false:true,
      registerForm:{
        phoneNum:null,
        password:null,
        checkCode:null
      },
      loginForm:{
        phoneNum:null,
        password:null,
      },
      isLoginLoading:false
    }
  },
  created() {
    if (this.$store.state.temp_isLoginPage > 0){
      this.$message({
        type:'success', message:'登录成功！', showClose:false, offset:80, center:true
      });
      this.$store.state.temp_isLoginPage = 0;
    }
    if (this.$store.state.temp_isLogoutPage > 0){
      this.$message({
        type:'success', message:'登出成功！', showClose:false, offset:80, center:true
      });
      this.$store.state.temp_isLogoutPage = 0;
    }
  },
  mounted() {
    this.judgeCode();
  },
  methods:{
    ...mapMutations(['changeLogin']),
    modifyIcon(menuBarIsOpen){
      this.menuBarIsOpen = menuBarIsOpen;
    },
    modifySearchIsOpen(){
      this.searchIsOpen = this.searchIsOpen?false:true;
    },
    openLoginDialog(){
      this.menuBarIsOpen = false;
      this.registDialog = false;
      this.loginDialog = true;
      this.$forceUpdate()
    },
    toOpenRegist(){
      this.menuBarIsOpen = false;
      this.loginDialog = false;
      this.registDialog = true;
    },
    toSubmitLogin(){
      if (this.loginForm.phoneNum==null||this.loginForm.phoneNum==''||
          this.loginForm.password==null||this.loginForm.password==''){
        this.$message({
          type:'warning', message:'请将表单填写完整', showClose:false, offset:80, center:true
        });
        return false;
      }else{
        //执行登录
        this.isLoginLoading = true;
        this.$axios.post('/user/login',{
          form:this.loginForm
        })
        .then((res)=>{
          if (res.data.code == 200){
            //登录成功
            var userData = {name:'zhangsan', Authorization: 'this_is_token_123456' }
            this.changeLogin(userData);
            this.$store.state.temp_isLoginPage += 1;
            this.$router.go(0)
          }else{
            //用户名或密码错误
            this.$message({
              type:'warning', message:'用户名或密码错误！', showClose:false, offset:80, center:true
            });
          }
          this.isLoginLoading = false;
        })
        .catch((error)=>{
          var userData = {name:'zhangsan', Authorization: 'this_is_token_123456' }
          this.changeLogin(userData);
          this.$store.state.temp_isLoginPage += 1;
          this.isLoginLoading = false;
          this.$router.go(0)
          // this.isLoginLoading = false;
          // this.$message({offset:80,message:"网络错误，无法访问！"});
          console.log("login_error"+error)
        })
      }
    },
    toLogOut(){
      localStorage.clear();
      this.$store.state.temp_isLogoutPage += 1;
      this.$router.go(0)
    },
    //获取验证码重要js----------------------↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    toGetPhoneCode(){
      let that = this;
      if (that.canGetPhoneCode) {
        //操作发送验证码
        //初步验证电话号码合法性
        if ((/^[1][3,4,5,7,8,9][0-9]{9}$/).test(this.registerForm.phoneNum)){
          if (this.canGetPhoneCode){
            that.$message({
              // type:'success', message:'发送成功，5分钟内有效！', showClose:false, offset:80, center:true
              type:'success', message:'获取成功', showClose:false, offset:80, center:true
            });
          }else{
            that.$message({
              type:'warning', message:'该手机号码已达次数上限', showClose:false, offset:80, center:true
            });
            return false;
          }
        }else{
          that.$message({
            type:'warning', message:'请输入正确的手机号！', showClose:false, offset:80, center:true
          });
          return false;
        }
        //成功再继续执行，否则return
        that.canGetPhoneCode = false;
        let interval = window.setInterval(function() {
          that.setStorage(that.second);
          if (that.second-- <= 0) {
            that.second = 60;
            that.canGetPhoneCode = true;
            window.clearInterval(interval);
          }
        }, 1000);
      }
    },
    setStorage(parm) {
      localStorage.setItem("dalay", parm);
      localStorage.setItem("_time", new Date().getTime());
    },
    getStorage() {
      let localDelay = {};
      localDelay.delay = localStorage.getItem("dalay");
      localDelay.sec = localStorage.getItem("_time");
      return localDelay;
    },
    judgeCode() {
      let that = this;
      let localDelay = that.getStorage();
      let secTime = parseInt(
          (new Date().getTime() - localDelay.sec) / 1000
      );
      console.log(localDelay);
      if (secTime > localDelay.delay) {
        that.canGetPhoneCode = true;
        console.log("已过期");
      } else {
        that.canGetPhoneCode = false;
        let _delay = localDelay.delay - secTime;
        that.second = _delay;
        that.timer = setInterval(function() {
          if (_delay > 1) {
            _delay--;
            that.setStorage(_delay);
            that.second = _delay;
            that.canGetPhoneCode = false;
          } else {
            // 此处赋值时为了让浏览器打开的时候,直接就显示剩余的时间
            that.canGetPhoneCode = true;
            window.clearInterval(that.timer);

          }
        }, 1000);
      }
    },
    //获取验证码重要js----------------------↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
 .jackRadius{
   /deep/.el-dialog{
     border-radius: 20px;
   }
 }
 @media screen and (max-width: 400px){
   /deep/.el-message--success {
     border-radius: 20px!important;
   }
 }
</style>
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
  .input-round2 {
    width: 70%!important;
    margin-left: 10% !important;
    margin-bottom: 1.6rem;
    border-radius:1rem;
    padding-left: 2rem;
    border: 0.1rem solid #777777;
    line-height: 2.4rem;
    outline: none;
    display: inline-block;
    font-size: 1rem;
  }
  .input-round3 {
    width: 34%!important;
    margin-bottom: 1.6rem;
    border-radius:1rem;
    padding-left: 2rem;
    border: 0.1rem solid #777777;
    line-height: 2.4rem;
    outline: none;
    font-size: 1rem;
  }
  .input-round4 {
    width: 34%!important;
    margin-bottom: 1.6rem;
    border: 0px;
    border-radius:1rem;
    line-height: 2.4rem;
    font-size: 1rem;
    color: #FFFFFF;
    background: #409eff;
  }
  .inner{
    margin-top: 4.6rem
  }
  .dropdown_class{
    cursor: pointer;
    user-select: none;
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
      width: 2.8rem;
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
      width: 2.6rem;
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
  @media screen and (min-width: 600px) {
    .login_dialog{
      width: 60%!important;
      margin-left: 20%!important;
    }
  }
  @media screen and (min-width: 1200px) {
    .login_dialog{
      width: 40%!important;
      margin-left: 30%!important;
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