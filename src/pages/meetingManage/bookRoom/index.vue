<template>
    <div class="bookMeeting">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="会议名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="与会人员" prop="join">
          <el-transfer v-model="ruleForm.value1" :data="ruleForm.data"></el-transfer>
        </el-form-item>
        <el-form-item label="会议地址" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择会议室">
            <el-option label="会议室一" value="room1"></el-option>
            <el-option label="会议室二" value="room2"></el-option>
            <el-option label="会议室三" value="room3"></el-option>
            <el-option label="会议室四" value="room4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会议时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="time1">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.time1" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        </el-form-item>
        <el-form-item label="会议描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即申请</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
          const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 10; i++) {
              data.push({
                key: i,
                label: `人员 ${ i }`,
                // disabled: i % 4 === 0
              });
            }
            return data;
          };
          //与会人员的判断
          var validateJoin = (rule, value, callback) => {
            if(this.ruleForm.value1.length == 0 ){
              callback(new Error('至少一人'));
            } else {
              callback();
            }
          };
          return {

            ruleForm: {
              name: '',
              region: '',
              date1: '',
              time1: '',
              delivery: false,
              type: [],
              desc: '',
              data: generateData(),
              value1: [1, 4]
            },
            rules: {
              name: [
                { required: true, message: '请输入会议名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              join: [
                { validator: validateJoin, trigger: 'blur' }
              ],
              region: [
                { required: true, message: '请选择会议区域', trigger: 'change' }
              ],
              date1: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
              ],
              time1: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
              ],
              type: [
                { type: 'array', required: true, message: '请至少选择一个会议性质', trigger: 'change' }
              ],
              desc: [
                { required: true, message: '请填写会议描述', trigger: 'blur' }
              ]
            }
          };
        },
      methods: {

        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>
<style>
  .bookMeeting form{
    width: 600px;
    margin: auto;
  }
</style>
