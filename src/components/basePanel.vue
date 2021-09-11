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
        <el-card class="box-card right_card" style="min-width: 18rem!important;height: 20rem">
          <div style="text-align: center;font-weight: 900">欢 迎 访 问</div>
          <div class="text item" id="myChart" :style="{width: '100%', height: '14rem'}"></div>
          <div style="text-align: center;font-weight: 900">
            {{nowDate}}
          </div>
        </el-card>
        <el-card class="box-card right_card" style="line-height: 1.6rem;min-width: 18rem!important;margin-top: 1rem;height: 5.6rem">
          <div style="float:left;margin-left: 1rem">只看关注&nbsp;<img src="../assets/iconfont/star.png" style="width: 1.2rem;vertical-align: middle;margin-top: -0.3rem"></div>
          <div style="float: right;margin-right: 1rem">关于站长&nbsp;<img src="../assets/iconfont/star.png" style="width: 1.2rem;vertical-align: middle;margin-top: -0.3rem"></div><div style="clear: both"></div>
          <div style="float:left;margin-left: 1rem">反馈意见&nbsp;<img src="../assets/iconfont/star.png" style="width: 1.2rem;vertical-align: middle;margin-top: -0.3rem"></div>
          <div style="float: right;margin-right: 1rem">帮助手册&nbsp;<img src="../assets/iconfont/star.png" style="width: 1.2rem;vertical-align: middle;margin-top: -0.3rem"></div><div style="clear: both"></div>

        </el-card>
        <el-card class="box-card right_card" style="min-width: 18rem!important;margin-top: 1rem;height: 10.4rem">
          <div class="text item">
            <div style="text-align:center;margin-bottom: 1rem;font-weight: 900">博文推荐</div>
            <div style="text-align:left;line-height: 1.6rem;margin-left: 1rem;margin-right: 1rem;">
              <div style="display: -webkit-box!important;-webkit-box-orient: vertical!important;-webkit-line-clamp: 1!important;overflow: hidden!important;">
                土耳其小孩提前剪彩被总统敲头</div>
              <div style="display: -webkit-box!important;-webkit-box-orient: vertical!important;-webkit-line-clamp: 1!important;overflow: hidden!important;">
                土耳其小孩提前剪彩被总统敲头</div>
              <div style="display: -webkit-box!important;-webkit-box-orient: vertical!important;-webkit-line-clamp: 1!important;overflow: hidden!important;">
                土耳其小孩提前剪彩被总统敲头</div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <div style="clear: both"></div>
  </div>
</template>

<script>
import * as echarts from '_echarts@5.2.0@echarts';
export default {
  data(){
    return{
      blogsData:[],
      nowDate:'',
    }
  },
  created() {
    // this.$axios.get('../assets/api/blogsData.json').then(res=>(this.blogsData = res.data))
    this.blogsData = [
      {
        "blogId":1,
        "blogTitle":"土耳其小孩提前剪彩被总统敲头",
        "blogContent":"9月4日，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩带 埃尔多安开玩笑地用指关节敲了敲小男孩的头，提醒他提前剪断了彩带。9月4日 ，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩",
        "blogAuthorId":1,
        "blogAuthorName":"张三",
        "blogCreateDatetime":"2021/09/10",
        "blogLookNum":23,
        "blogLikeNum":16,
        "blogCommentNum":0,
        "blogMainImg":"http://img3m3.ddimg.cn/40/31/25316023-1_b_5.jpg"
      },{
        "blogId":1,
        "blogTitle":"土耳其小孩提前剪彩被总统敲头",
        "blogContent":"9月4日，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩带 埃尔多安开玩笑地用指关节敲了敲小男孩的头，提醒他提前剪断了彩带。9月4日 ，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩",
        "blogAuthorId":1,
        "blogAuthorName":"张三",
        "blogCreateDatetime":"2021/09/10",
        "blogLookNum":23,
        "blogLikeNum":16,
        "blogCommentNum":0,
        "blogMainImg":"http://img3m3.ddimg.cn/40/31/25316023-1_b_5.jpg"
      },{
        "blogId":1,
        "blogTitle":"土耳其小孩提前剪彩被总统敲头",
        "blogContent":"9月4日，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩带 埃尔多安开玩笑地用指关节敲了敲小男孩的头，提醒他提前剪断了彩带。9月4日 ，土耳其总统埃尔多安参加活动的剪彩仪式时被一个小男孩抢先一步剪断了彩",
        "blogAuthorId":1,
        "blogAuthorName":"张三",
        "blogCreateDatetime":"2021/09/10",
        "blogLookNum":23,
        "blogLikeNum":16,
        "blogCommentNum":0,
        "blogMainImg":"http://img3m3.ddimg.cn/40/31/25316023-1_b_5.jpg"
      }
    ]
  },
  mounted() {
    this.currentTime();
    this.drawLine();
  },
  methods:{
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
    },
    drawLine() {
      var chartDom = document.getElementById('myChart');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        series: [{
          name: 'hour',
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          min: 0,
          max: 12,
          splitNumber: 12,
          axisLine: {
            lineStyle: {
              //表壳宽度
              width: 6,
              color: [
                [1, 'rgba(0,0,0,0.7)']
              ],
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 15
            }
          },
          splitLine: {
            lineStyle: {
              shadowColor: 'rgba(0, 0, 0, 0.3)',
              shadowBlur: 3,
              shadowOffsetX: 1,
              shadowOffsetY: 2
            }
          },
          axisLabel: {
            fontSize: 14,
            distance: 10,
            formatter: function (value) {
              if (value === 0) {
                return '';
              }
              return value;
            }
          },
          anchor: {
            show: false,
            icon: 'path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z',
            showAbove: false,
            offsetCenter: [0, '-35%'],
            size: 20,
            keepAspect: true,
            itemStyle: {
              color: '#707177'
            }
          },
          pointer: {
            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
            width: 6,
            length: '55%',
            offsetCenter: [0, '8%'],
            itemStyle: {
              color: '#C0911F',
              shadowColor: 'rgba(0, 0, 0, 0.3)',
              shadowBlur: 8,
              shadowOffsetX: 2,
              shadowOffsetY: 4
            }
          },
          detail: {
            show: false
          },
          title: {
            offsetCenter: [0, '30%']
          },
          data: [{
            value: 0
          }]
        },
          {
            name: 'minute',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 60,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 4,
              length: '70%',
              offsetCenter: [0, '8%'],
              itemStyle: {
                color: '#C0911F',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4
              }
            },
            anchor: {
              show: true,
              size: 8,
              showAbove: false,
              itemStyle: {
                borderWidth: 15,
                borderColor: '#C0911F',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4
              }
            },
            detail: {
              show: false
            },
            title: {
              offsetCenter: ['0%', '-40%']
            },
            data: [{
              value: 0
            }]
          },
          {
            name: 'second',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            min: 0,
            max: 60,
            animationEasingUpdate: 'bounceOut',
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
              width: 2,
              length: '85%',
              offsetCenter: [0, '8%'],
              itemStyle: {
                color: '#C0911F',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4
              }
            },
            anchor: {
              show: true,
              size: 8,
              showAbove: true,
              itemStyle: {
                color: '#C0911F',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 8,
                shadowOffsetX: 2,
                shadowOffsetY: 4
              }
            },
            detail: {
              show: false
            },
            title: {
              offsetCenter: ['0%', '-40%']
            },
            data: [{
              value: 0
            }]
          }]
      };

      var timeUpdatedStatus = {
        second: false,
        minute: false,
        hour: false
      };

      function updateSeries(time, series, type) {
        var isCritical = (Math.floor(time) === 0) || (type === 'second' && time === 1);
        if (isCritical && timeUpdatedStatus[type] === true) {
          timeUpdatedStatus[type] = false;
          series.data[0].value = 0;
          series.clockwise = true;
          option.animationDurationUpdate = 0;
          myChart.setOption(option, true);
        }
        series.data[0].value = time;
        series.clockwise = true;
        if (time === 0) {
          timeUpdatedStatus[type] = true;
          series.clockwise = false;
        }
      }

      setInterval(function () {
        var date = new Date();
        var second = date.getSeconds();
        var minute = date.getMinutes() + second / 60;
        var hour = date.getHours() % 12 + minute / 60;

        updateSeries(second, option.series[2], 'second');
        updateSeries(minute, option.series[1], 'minute');
        updateSeries(hour, option.series[0], 'hour');

        option.animationDurationUpdate = 300;
        myChart.setOption(option, true);
        date = null;
      }, 1000);

      option && myChart.setOption(option);
    }
  },


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