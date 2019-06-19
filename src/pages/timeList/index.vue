<template>
  <div class="oa_main">
    <!--serach-->
    <div class="oa_search">
      <el-form :inline="true" :model="form" class="demo-form-inline" :rules="rule" ref="form">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" prop="start">
          <el-date-picker
            v-model="form.start"
            type="date"
            placeholder="请选择时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="end">
          <el-date-picker
            v-model="form.end"
            type="date"
            placeholder="请选择时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-circle-plus-outline" @click="onSubmit">新增日程</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--list-->
    <div class="oa_timelist">
      <full-calendar class="test-fc" :events="Events"
                     first-day='1' locale="zh"
                     ref="timeMain"
                     :current-month="currentMonth"
                     @changeMonth="changeMonth"
                     @eventClick="eventClick"
                     @dayClick="dayClick"
                     @moreClick="moreClick">
        <template slot="fc-event-card" slot-scope="scope">
          <p><i class="fa">sadfsd</i> {{ scope.event.title }} test</p>
        </template>
      </full-calendar>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
      'full-calendar': require('vue-fullcalendar')
    },
    data() {
      var validateDate = (rule, value, callback) => {
        if( this.form.start !=="" && this.form.end !== "" ){
          if(Date.parse(this.form.start) > Date.parse(this.form.end)){
            callback(new Error('开始时间应该在结束之前'))
          }else {
            callback();
          }
        }else {
          callback();
        }
      };
      return {
        Events: [
          {
            title: '开始',
            start: '2019-5-11',
            end: '2019-05-12',
          },
          {
            title: '开始',
            start: '2019-5-10',
            end: '2019-05-12',
          },
        ],
        currentMonth: '',
        form: {
          title: '',
          start: '',
          end: ''
        },
        rule: {
          title: [
            { required: true, message: '请输入事件', trigger: 'blur' }
          ],
          start: [
            { required: true, message: '请选择日期', trigger: 'change' },
            { validator: validateDate, trigger: 'change' }
          ],
          end: [
            { required: true, message: '请选择日期', trigger: 'change' },
            { validator: validateDate, trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      changeMonth(start, end, current) {
        // console.log('changeMonth', start, end, current);
      },
      eventClick(event, jsEvent, pos) {
        // console.log('eventClick', event, jsEvent, pos);
      },
      dayClick(day, jsEvent) {
        // console.log('dayClick', day, jsEvent);
      },
      moreClick(day, events, jsEvent) {
        // console.log('moreCLick', day, events, jsEvent);
      },
      onSubmit() {
        this.$refs.form.validate(valid => {
          if (valid) {
            var newEvent = { title: this.form.title, start: this.form.start, end: this.form.end }
            this.Events.push(newEvent);
            this.form.title = this.form.start = this.form.end = '';
            return true
          } else {
            return false
          }

        })
      }
    }
  };
</script>
<style lang="scss" scoped>
  .comp-full-calendar {
    width: 100%;
    max-width: inherit;
    padding: 0;
  }
</style>
<style lang="scss">
  .comp-full-calendar {
  .header-center {
    font-size: 16px;
    line-height: 30px;
  }
  .full-calendar-body .weeks {
    height: 30px;
    line-height: 30px;
    border-color: #eee;
  }
  }
</style>
