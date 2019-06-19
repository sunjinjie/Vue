<template>
  <div class="settingBack" :class="{show:isSetting}">
    <div class="setting">
      <div class="title">
        <span>修改密码</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rule" ref="ruleForm">
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="on" placeholder="请输入原密码"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input type="newPassword" v-model="ruleForm.newPassword" autocomplete="on" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item prop="surePassword">
          <el-input type="surePassword" v-model="ruleForm.surePassword" autocomplete="on" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="iconfont iconshezhi shezhi" @click="troggleStting"></div>
  </div>
</template>
<script>
  import { mapState} from "vuex"
  export default {

    name: '',
    data() {
      //密码的判断
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.ruleForm.surePassword !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          password: '',
          newPassword: '',
          surePassword: '',
        },
        // show: false,
        rule: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          newPassword: [
            { validator: validatePass1, trigger: 'blur' }
          ],
          surePassword: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      ...mapState(['isSetting'])
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.troggleStting();
          } else {
            console.log('修改失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      troggleStting(){
        this.$store.commit("toggleSettingPass")
      }
    }
  }
</script>
<style>
  .settingBack{
    position: fixed;
    /*right: 20px;*/
    right: -300px;
    overflow: hidden;
    top: 50px;
    /*height: 100%;*/
    z-index: 1000;
    /*background-color: white;*/
  }
  .shezhi{
    width: 50px;
    height: 50px;
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;
    margin: auto;
    float: right;
    background-color: dodgerblue;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    color: white;
    margin-top: 250px;
  }
  .setting{
    width: 300px;
    height: 100%;
    background-color: white;
    float: right;
  }
  .title {
    background-color: #2889d8;
    color: white;
    height: 40px;
    line-height: 40px;
  }
  .title>span{
    margin-left: 20px;
  }
  .setting button{
    margin-left: 20px;
  }
  .show{
    width: 100%;
    height: 100%;
    background: rgb(0,0,0,0.6);
    z-index: 2000;
    right: 20px;
    transition: all 0.5s ease-in-out;
  }
</style>
