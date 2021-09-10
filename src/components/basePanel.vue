<template>
  <div>
    <div style="font-family:'Microsoft JhengHei'">
      <div class="left_side space">.</div>
      <div class="blog">
        <el-card class="box-card blog_card">
          <div slot="header" class="clearfix">
            <span style="font-weight: 900">博客</span>
            <span style="float: right; padding: 3px 0">共<span style="color: #E6A23C">{{blogsData.length}}</span>篇</span>
          </div>
          <div>
            <div class="blog_layout" v-for="blogItem in blogsData" :key="blogItem">
              <div3><img :src="blogItem.blogMainImg"></div3>
              <div1>{{blogItem.blogTitle}}</div1>
              <div2>{{blogItem.blogContent}}</div2>
              <div4>
                <img class="avatar" src="../assets/iconfont/user.png">
                <table>
                  <tr><td>{{blogItem.blogAuthorName}}</td></tr>
                  <tr><td class="timeSize">{{blogItem.blogCreateDatetime}}</td></tr>
                </table>
                <div><table><tr>
                      <td><img src="../assets/iconfont/look.png" style="width: 1.4rem"></td>
                      <td>{{blogItem.blogLookNum}}</td>
                      <td><img src="../assets/iconfont/like.png" class="layoutImg" style="width: 1.2rem"></td>
                      <td class="layoutImgText">{{blogItem.blogLikeNum}}</td>
                    </tr></table></div>
              </div4>
              <div style="clear: both"></div><hr>
            </div>
          </div>
        </el-card>
      </div>
      <div class="right_side">
        <el-card class="box-card right_card" style="min-width: 18rem!important;height: 16rem">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
        <el-card class="box-card right_card" style="min-width: 18rem!important;margin-top: 1rem;height: 6rem">
          <div v-for="o in 3" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
        <el-card class="box-card right_card" style="min-width: 18rem!important;margin-top: 1rem;height: 14rem">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      blogsData:[
        {
          blogId:1,
          blogTitle:'土耳其小孩提前剪彩被总统敲头',
          blogContent:'9月4日，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩带。\n' +
              '                埃尔多安开玩笑地用指关节敲了敲小男孩的头，提醒他提前剪断了彩带。9月4日\n' +
              '                ，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩',
          blogAuthorId:1,
          blogAuthorName:'张三',
          blogCreateDatetime:'2021/09/10',
          blogLookNum:23,
          blogLikeNum:16,
          blogCommentNum:0,
          blogMainImg:'http://img3m3.ddimg.cn/40/31/25316023-1_b_5.jpg',
        },{
          blogId:1,
          blogTitle:'土耳其小孩提前剪彩被总统敲头',
          blogContent:'9月4日，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩带。\n' +
              '                埃尔多安开玩笑地用指关节敲了敲小男孩的头，提醒他提前剪断了彩带。9月4日\n' +
              '                ，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩',
          blogAuthorId:1,
          blogAuthorName:'张三',
          blogCreateDatetime:'2021/09/10',
          blogLookNum:23,
          blogLikeNum:16,
          blogCommentNum:0,
          blogMainImg:'http://img3m3.ddimg.cn/40/31/25316023-1_b_5.jpg',
        },{
          blogId:1,
          blogTitle:'土耳其小孩提前剪彩被总统敲头',
          blogContent:'9月4日，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩带。\n' +
              '                埃尔多安开玩笑地用指关节敲了敲小男孩的头，提醒他提前剪断了彩带。9月4日\n' +
              '                ，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩',
          blogAuthorId:1,
          blogAuthorName:'张三',
          blogCreateDatetime:'2021/09/10',
          blogLookNum:23,
          blogLikeNum:16,
          blogCommentNum:0,
          blogMainImg:'http://img3m3.ddimg.cn/40/31/25316023-1_b_5.jpg',
        }
      ],
    }
  }
}
</script>

<style>
  .left_side{
    width: 12%!important;
    float: left;
  }
  .blog{
    width: 54%!important;
    float: left;
  }
  .right_side{
    width: 12%!important;
    float: left;
  }
  .space{
    user-select: none;
    color: #e3e3e5;
  }
  .blog_layout{
    padding:1.6rem 2rem 1.2rem 2rem;/*上右下左*/
  }
  .blog_layout div1{/*title*/
    float: left;
    width: 54%;
    height: 2rem;
    font-weight: 900;
    font-size: 1.2rem;
    display: -webkit-box!important;
    -webkit-box-orient: vertical!important;
    -webkit-line-clamp: 1!important;
    overflow: hidden!important;
  }
  .layoutImg{
    margin-left: 1rem;
  }
  .blog_layout div2{/*text*/
    float: left;
    width: 54%;
    min-height: 10rem;
    line-height: 2rem;
    font-size: 1rem;
    max-height: 10rem;
    display: -webkit-box!important;
    -webkit-box-orient: vertical!important;
    -webkit-line-clamp: 5!important;
    overflow: hidden!important;
  }
  .blog_layout div3 img{/*img*/
    float: right;
    width: 42%;
    border-radius: 1rem;
    height: 16rem;
  }
  .blog_layout div4{/*text*/
    float: left;
    width: 54%;
    height: 3rem;
    margin-top: 1rem;
  }
  .blog_layout div4 img{
    float: left;
    width: 3rem;
    line-height: 4rem;
    vertical-align: middle;
  }
  .blog_layout div4 table1 td{
    float: left;
    font-size: 1rem;
    margin-top: 0.2rem;
    margin-left: 0.4rem;
    max-width: 6rem!important;
    display: -webkit-box!important;
    -webkit-box-orient: vertical!important;
    -webkit-line-clamp: 1!important;
    overflow: hidden!important;
  }
  .timeSize{
    font-size: 0.8rem!important;
    color: #777777;
  }
  .blog_layout div4 table{
    float: left;
  }
  .blog_layout div4 div{
    font-weight: 500!important;
    font-size: 1rem!important;
    float: right;
    width: 40%;
  }
  .blog_layout div4 div table img{
    width: 1.6rem;
  }
  .blog_layout div4 div table{
    width: 1.6rem;
    margin-top: 0.6rem;
  }
  .blog_layout hr{
    background: #ebeef5;
    width: 100%;
    margin-top: 3rem;
  }
  .blog_card{
    min-height: 38rem;
    /*max-height: 80rem;*/
    margin: auto;
    width: 96%;
    border: 0px!important;
    box-shadow: 0 0 1rem #777777!important;
    border-radius: 0.8rem!important;
    /*overflow: auto!important;*/
  }
  /*.blog_card::-webkit-scrollbar {*/
  /*  !*滚动条整体样式*!*/
  /*  width : 1rem;  !*高宽分别对应横竖滚动条的尺寸*!*/
  /*  height: 1rem;*/
  /*}*/
  /*.blog_card::-webkit-scrollbar-thumb {*/
  /*  !*滚动条里面小方块*!*/
  /*  border-radius: 1rem;*/
  /*  box-shadow   : inset 0 0 1rem #777777;*/
  /*  background   : #777777;*/
  /*}*/
  /*.blog_card::-webkit-scrollbar-track {*/
  /*  !*滚动条里面轨道*!*/
  /*  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);*/
  /*  border-radius: 1rem;*/
  /*  background   : #ededed;*/
  /*}*/
  .right_card{
    margin: auto;
    width: 96%;
    border: 0px!important;
    box-shadow: 0 0 1rem #777777!important;
    border-radius: 0.8rem!important;
  }
  @media screen and (max-width: 1200px) {
    .left_side{
      width: 8%!important;
      float: left;
    }
    .blog{
      width: 82%!important;
      float: left;
    }
    .right_side{
      display: none;
    }
    /*修改风格*/
    .blog_layout div3 img{/*img*/
      width: 100%;
      border-radius: 1rem;
      height: 16rem;
    }
    .blog_layout div1{/*title*/
      margin-top: 0.8rem;
      float: left;
      width: 100%;
      height: 2rem;
      font-weight: 900;
      font-size: 1.2rem;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 1!important;
      overflow: hidden!important;
    }
    .blog_layout div2{/*text*/
      float: left;
      width: 100%;
      min-height: 6rem;
      line-height: 2rem;
      font-size: 1rem;
      max-height: 6rem;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 3!important;
      overflow: hidden!important;
    }
    .blog_layout div4{/*text*/
      float: left;
      width: 100%;
      height: 3rem;
      margin-top: 1rem;
    }
    .blog_layout div4 img{
      float: left;
      width: 3rem;
      line-height: 4rem;
      vertical-align: middle;
    }
    .blog_layout div4 table{
      float: left;
    }
    .blog_layout div4 div{
      font-weight: 500!important;
      font-size: 1rem!important;
      float: right;
      width: 20%;
    }
    .blog_layout div4 div table img{
      width: 1.6rem;
    }
    .blog_layout div4 div table{
      width: 1.6rem;
      margin-top: 0.6rem;
    }
  }
  @media screen and (max-width: 800px) {
    .blog_layout div4 table1 td{

      float: left;
      font-size: 1rem;
      margin-top: 0.1rem;
      max-width: 20rem!important;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 1!important;
      overflow: hidden!important;
    }
    .left_side{
      width: 2%!important;
      float: left;
    }
    .blog{
      width: 96%!important;
      float: left;
    }
    .right_side{
      display: none;
    }
    .blog_layout div3 img{/*img*/
      width: 100%;
      border-radius: 1rem;
      height: 14rem;
    }
    .blog_layout div1{/*title*/
      margin-top: 0.8rem;
      float: left;
      width: 100%;
      height: 2rem;
      font-weight: 900;
      font-size: 1.2rem;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 1!important;
      overflow: hidden!important;
    }
    .blog_layout div2{/*text*/
      float: left;
      width: 100%;
      min-height: 4rem;
      line-height: 1.4rem;
      font-size: 1rem;
      max-height: 4rem;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 3!important;
      overflow: hidden!important;
    }
    .blog_layout div4 div{
      font-weight: 500!important;
      font-size: 1rem!important;
      float: right;
      width: 30%;
    }
  }
  @media screen and (max-width: 600px) {
    .blog_layout hr{
      background: #ebeef5;
      width: 100%;
      margin-top: 1.2rem;
      margin-bottom: 0.6rem;
    }
    .blog_layout{
      padding:0.8rem 0.8rem 0.8rem 0.8rem;/*上右下左*/
    }
    .blog_layout div3 img{/*img*/
      width: 100%;
      border-radius: 1rem;
      height: 12rem;
    }
    .blog_layout div1{/*title*/
      margin-top: 0.8rem;
      float: left;
      width: 100%;
      height: 1.4rem;
      font-weight: 900;
      font-size: 1.2rem;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 1!important;
      overflow: hidden!important;
    }
    .timeSize{
      font-size: 0.6rem!important;
      color: #777777;
    }
    .blog_layout div2{/*text*/
      margin-top: 0.5rem;
      float: left;
      width: 100%;
      min-height: 4rem;
      line-height: 1.4rem;
      font-size: 1rem;
      max-height: 4rem;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 3!important;
      overflow: hidden!important;
    }
    .blog_layout div4 div{
      font-weight: 500!important;
      font-size: 1rem!important;
      float: right;
      width: 36%;
    }
    .blog_layout div4 table1 td{
      float: left;
      font-size: 1rem;
      margin-top: 0.1rem;
      max-width: 8rem!important;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 1!important;
      overflow: hidden!important;
    }
  }
  @media screen and (max-width: 400px) {
    .blog_layout hr{
      background: #ebeef5;
      width: 100%;
      margin-top: 2rem;
      margin-bottom: 0.8rem;
    }
    .blog_layout{
      padding:0.4rem 0.4rem 0.4rem 0.4rem;/*上右下左*/
    }
    .blog_layout div2{/*text*/
      margin-top: 0.5rem;
      float: left;
      width: 100%;
      min-height: 4rem;
      line-height: 1.4rem;
      font-size: 1rem;
      max-height: 4rem;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 3!important;
      overflow: hidden!important;
    }
    .blog_layout div4 div{
      font-weight: 500!important;
      font-size: 1rem!important;
      float: right;
      width: 36%;
    }
    .blog_layout div4{/*text*/
      float: left;
      width: 100%;
      height: 1rem;
      margin-top: 1rem;
    }
    .blog_layout div4 table1 td{
      float: left;
      font-size: 0.8rem;
      max-width: 6rem!important;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 1!important;
      overflow: hidden!important;
    }
    .blog_layout div4 div img{
      width: 1.4rem!important;
    }
    .layoutImg{
      margin-left: 0.4rem;
    }
    .avatar{
      width: 2.4rem!important;
    }
  }
  @media screen and (max-width: 360px) {
    .blog_layout hr{
      background: #ebeef5;
      width: 100%;
      margin-top: 2rem;
      margin-bottom: 0.8rem;
    }
    .blog_layout{
      padding:0.4rem 0.4rem 0.4rem 0.4rem;/*上右下左*/
    }
    .blog_layout div3 img{/*img*/
      width: 100%;
      border-radius: 1rem;
      height: 10rem;
    }
    .blog_layout div2{/*text*/
      margin-top: 0.5rem;
      float: left;
      width: 100%;
      min-height: 4rem;
      line-height: 1.4rem;
      font-size: 1rem;
      max-height: 4rem;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 3!important;
      overflow: hidden!important;
    }
    .blog_layout div4 div{
      font-weight: 500!important;
      font-size: 1rem!important;
      float: right;
      width: 42%;
    }
    .blog_layout div4{/*text*/
      float: left;
      width: 100%;
      height: 1rem;
      margin-top: 1rem;
    }
    .blog_layout div4 table1 td{
      float: left;
      font-size: 0.8rem;
      max-width: 4rem!important;
      display: -webkit-box!important;
      -webkit-box-orient: vertical!important;
      -webkit-line-clamp: 1!important;
      overflow: hidden!important;
    }
    .blog_layout div4 div img{
      width: 1.4rem!important;
    }
    .avatar{
      width: 2.4rem!important;
    }
  }

  @media screen and (max-width: 290px){
    .blog_layout div4 div{
      font-weight: 500!important;
      font-size: 1rem!important;
      float: right;
      width: 40%;
    }
    .layoutImg{
     display: none;
    }
    .layoutImgText{
      display: none;
    }
    .blog_layout div3 img{/*img*/
      width: 100%;
      border-radius: 1rem;
      height: 8rem;
    }
  }
</style>