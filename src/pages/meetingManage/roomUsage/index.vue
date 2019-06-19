<template>
    <div class="roomUsage">
      <h2>上一周会议室使用情况</h2>
      <div class="reference-website">
        <a href="https://v-charts.js.org/#/" target="_blank">charts组件参考v-charts</a>
      </div>
      <div class="tags">
        <el-tag @click="shiftto(0)">折线图</el-tag>
        <el-tag @click="shiftto(1)">柱状图</el-tag>
        <el-tag @click="shiftto(2)">条形图</el-tag>
        <el-tag @click="shiftto(3)">饼图</el-tag>
        <el-tag @click="shiftto(4)">环图</el-tag>
        <el-tag @click="shiftto(5)">雷达图</el-tag>
        <el-tag @click="shiftto(6)">散点图</el-tag>
      </div>
      <div class="app-chart">
        <div id="print-content">
          <!--用于图标组件-->
          <!-- 折线图 -->
          <ve-line :data="chartData" v-if="displayStyle[0]"></ve-line>
          <!--柱状图-->
          <ve-histogram :data="chartData" v-if="displayStyle[1]"></ve-histogram>
          <!--条形图-->
          <ve-bar :data="chartData" v-if="displayStyle[2]"></ve-bar>
          <!--饼图-->
          <ve-pie :data="chartData" v-if="displayStyle[3]"></ve-pie>
          <!--环图-->
          <ve-ring :data="chartData" v-if="displayStyle[4]"></ve-ring>
          <!--雷达图-->
          <ve-radar :data="chartData" v-if="displayStyle[5]"></ve-radar>
          <!--散点图-->
          <ve-scatter :data="chartData" v-if="displayStyle[6]"></ve-scatter>

          <!--导出的图片box-->
          <div ref="box"></div>
        </div>
        <div class="foot">
          <!--打印操作-->
          <button type="primary" @click="doPrint">打 印</button>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {

              chartData: {
                columns: ['日期', '会议室一', '会议室二', '会议室三'],
                rows: [
                  { 日期: '周一', 会议室一: 10, 会议室二: 11, 会议室三: 5 },
                  { 日期: '周二', 会议室一: 8, 会议室二: 14, 会议室三: 8 },
                  { 日期: '周三', 会议室一: 9, 会议室二: 12, 会议室三: 6 },
                  { 日期: '周四', 会议室一: 5, 会议室二: 10, 会议室三: 4 },
                  { 日期: '周五', 会议室一: 6, 会议室二: 9, 会议室三: 2 },
                  { 日期: '周六', 会议室一: 3, 会议室二: 8, 会议室三: 5 },
                  { 日期: '周日', 会议室一: 3, 会议室二: 8, 会议室三: 5 }
                ]
              },
              displayStyle: [
                true,
                false,
                false,
                false,
                false,
                false,
                false
              ]
            }
        },
      methods: {
        //  切换页面
        shiftto(index){
          for (var i = 0;i < 7;i++){
            this.displayStyle[i] = false;
          }
          this.displayStyle[index] = true;
          this.$forceUpdate();
        },
        //打印页面
        doPrint(){
          this.createImage();
          this.$nextTick(()=>{
            if(this.$refs.box.innerHTML){
              let PrintContent = document.getElementById('print-content');
              let newContent =PrintContent.innerHTML;
              let oldContent = document.body.innerHTML;
              document.body.innerHTML = newContent;
              window.print();
              window.location.reload();
              document.body.innerHTML = oldContent;
              return false;
            }
          });
        },
        //chart图标导出图片
        createImage(){
     //   this.$nextTick(()=>{});
          const canvas = document.getElementsByTagName('canvas')[0];
          const box = this.$refs.box;
          let image = canvas.toDataURL({
            type:"png",
            pixelRatio: 2,
            backgroundColor: '#fff',//不设置此项，导出图片的底色是黑色
          });
          box.innerHTML = '<img src="'+image+'" alt="">';
        }
      }
    }
</script>
<style>
  .tags{
    padding-left: 50px;
    padding-bottom: 20px;
    border-bottom: 1px gray solid;
  }
  .el-tag{
    cursor: pointer;
    margin-left: 20px;
  }
  .roomUsage h2{
    text-align: center;
    font-size: 30px;
    margin: 20px auto;
  }
  .reference-website{
    margin-bottom: 30px;
    padding: 20px;
    background-color: #eeeeee;

  }
  .reference-website a{
    color: #2889d8;
    font-weight: bold;
  }
  .foot{
    text-align: center;
  }
  .foot button{
    width: 100px;
    height: 40px;
    line-height: 40px;
    color: white;
    border: 0px;
    background-color: #2889d8;
  }
</style>
