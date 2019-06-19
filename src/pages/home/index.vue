<template>
  <div class="oa_main">
    <!--卡片-->
    <el-row class="oa_main_card">
      <el-col :span="6">
        <el-card style="background:#F56C6C;">
          <div class="todo_l">
            <el-row>
              <el-col :span="20" class="tl"><span>欢迎登陆集团协同办公平台</span></el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="background:#67C23A;">
          <div class="todo_l">
            <el-row>
              <el-col :span="12" class="tl"><span>未读消息</span></el-col>
              <el-col :span="12" class="tr"><el-button type="text" @click="handleGoUrl('/onlineInformation')"><i>{{ unread }}</i></el-button></el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="background:#E6A23C;">
          <div class="todo_l">
            <el-row>
              <el-col :span="12" class="tl"><span>日程安排</span></el-col>
              <el-col :span="12" class="tr"><el-button type="text" @click="handleGoUrl('/timeEventList')"><i>Go</i></el-button></el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="background:#409EFF;">
          <div class="date_l">
            <el-row>
              <el-col :span="12" class="tl">
                <p>{{dateList.date}}</p>
                <p>{{dateList.weekday}}</p>
              </el-col>
              <el-col :span="12" class="tr">
                {{dateList.time}}
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>


    <el-row class="oa_doc">
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="title"><i class="iconfont icon-inquirytemplate"></i>公告</span>
          </div>
          <div>
            <!--table-->
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                fixed
                prop="id"
                label="编号"
                show-overflow-tooltip
                width="120">
              </el-table-column>
              <el-table-column
                prop="date"
                label="时间"
                align="center"
                show-overflow-tooltip
                width="100">
              </el-table-column>
              <el-table-column
                prop="name"
                align="center"
                min-width="300"
                show-overflow-tooltip
                label="标题">
              </el-table-column>
              <el-table-column
                prop="publicdate"
                align="center"
                label="发布日期"
                show-overflow-tooltip
                width="100">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'Main',
    mounted() {
      this.showTime();
    },
    created() {
      console.log("a");
    },
    data() {
      return {
        unread: 2,
        dateList: {
          date: '',
          weekday: '',
          time: ''
        },
        // tableData: new Array(5).fill({
        //   id: 10000,
        //   type: '哦',
        //   name: '嗯',
        //   date: '2019-5-11'
        // })
        tableData: [
          {
            id: 1,
            date: '2019-5-11',
            name: '啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？',
            publicdate: '2019-5-10'
          }
        ]
      };
    },
    methods: {
      showTime() {
        var show_day = new Array(
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六'
        );
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var day = time.getDay();
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var second = time.getSeconds();
        month < 10 ? (month = '0' + month) : month;
        month = month;
        hour < 10 ? (hour = '0' + hour) : hour;
        minutes < 10 ? (minutes = '0' + minutes) : minutes;
        this.dateList.date = year + '年' + month + '月' + date + '日';
        this.dateList.weekday = show_day[day];
        this.dateList.time = hour + ':' + minutes + ':' + second;
        setTimeout(this.showTime, 1000);
      },
      handleGoUrl(url) {
        this.$router.push({ path: url });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .oa_main_card {
  .el-card {
    margin: 6px;
  }
  .todo_l {
    line-height: 75px;
    color: #fff;
  .tl {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
  .tr {
  .el-button--text {
    font-size: 60px;
    font-weight: 500;
    color: #fff;
    padding: 0;
    line-height: 75px;
  }
  .el-button--text:hover {
    font-size: 62px;
    transition: 0.5;
    text-shadow: 2px 2px 1px #666;
  }
  }
  }
  .date_l {
    color: #fff;
  .tl {
    font-size: 14px;
    font-weight: bold;
  }
  .tr {
    line-height: 75px;
    font-size: 35px;
    text-align: center;
  }
  }
  }
  .oa_doc {
    margin: 25px 0px;
  .el-card {
    margin: 0 6px;
  .title {
    font-size: 25px;
    font-weight: bold;
    color: #409eff;
    background-color: white;
  }
  .el-icon-more-outline:hover {
    cursor: pointer;
    color: #409eff;
  }
  .el-icon-search {
    font-weight: bold;
  }
  }
  }
</style>
<style lang="scss">
  .oa_main_card {
  .el-card__body {
    height: 75px;
  }
  }
  .el-card__body:hover {
    box-shadow: 3px 3px 3px #ccc;
  }
</style>
