<template>
  <div>
    <div>
      <div class="left_side space">.</div>
      <div class="blog">
        <el-card class="box-card blog_card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 50" :key="o" class="text item">
            {{'列表内容 ' + o }}
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
      area:{
      }
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
  .blog_card{
    min-height: 38rem;
    max-height: 80rem;
    margin: auto;
    width: 96%;
    border: 0px!important;
    box-shadow: 0 0 1rem #777777!important;
    border-radius: 0.8rem!important;
    overflow: auto!important;
  }
  .blog_card::-webkit-scrollbar {
    /*滚动条整体样式*/
    width : 1rem;  /*高宽分别对应横竖滚动条的尺寸*/
    height: 1rem;
  }
  .blog_card::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 1rem;
    box-shadow   : inset 0 0 1rem #777777;
    background   : #777777;
  }
  .blog_card::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    background   : #ededed;
  }
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
  }
  @media screen and (max-width: 800px) {
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
  }
</style>