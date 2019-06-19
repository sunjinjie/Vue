<template>
  <div class="editInfor">
    <div class="editContent">
      <div class="title">
        <span>编辑资料</span>
        <span class="iconfont iconguanbi close" @click="close"></span>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" required>
          <el-col :span="11">
            <el-form-item prop="born">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.born" style="width: 100%;" value-format="yyyy-MM-dd" fromat="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="暂住地" prop="place">
          <el-input v-model="ruleForm.place"></el-input>
        </el-form-item>
        <el-form-item label="家乡" prop="hometown">
          <el-input v-model="ruleForm.hometown"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍" prop="selfintro">
          <el-input type="textarea" v-model="ruleForm.selfintro"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import { login } from '@/api/permission'
  export default {
    name: '',
    data() {
      return {
        ruleForm: {
          name: '',
          sex: '',
          born: '',
          place: '',
          hometown: '',
          mobile: '',
          tel: '',
          selfintro: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          born: [
            { type: 'string', required: true, message: '请选择日期', trigger: 'change' }
          ],
          place: [
            { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
          ],
          hometown: [
            { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
          ],
          mobile: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 0, max: 11, message: '长度在 0 到 11 个字符', trigger: 'blur' }
          ],
          tel: [
            { min: 0, max: 11, message: '长度在 0 到 11 个字符', trigger: 'blur' }
          ],
          selfintro: [
            { min: 0, max: 150, message: '长度在 0 到 150 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    created(){
      // console.log(this.$store.state.user)
      // this.user = this.$store.state.user
      // console.log(this.$store.state.UserToken)
      this.getInfor();
      // login().then((res) => {
      //   for (var i = 0; i < res.users.length; i++){
      //     if (res.users[i].username == this.$store.state.UserToken) {
      //       this.ruleForm = res.users[i];
      //       break;
      //     }else {
      //       this.ruleForm = {};
      //     }
      //   }
      // })
    },
    methods: {
      async getInfor(){
        var res = await login();
        for (var i = 0; i < res.users.length; i++){
          if (res.users[i].username == this.$store.state.UserToken) {
            this.ruleForm = res.users[i];
            break;
          }else {
            this.ruleForm = {};
          }
        }
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 通过axios.post传输数据
            alert('submit!');
          } else {
            // console.log(this.ruleForm.born);
            // console.log(this.ruleForm.sex);

            // console.log('修改失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      close(){
        this.$store.commit("toggleEditInfo")
      }
    }
  }
</script>
<style>
  .editInfor{
    width: 100%;
    position: fixed;
    top: 50px;
    height: 100%;
    /*background-color: black;*/
    /*opacity: 0.6;*/
    background: rgb(0,0,0,0.6);
  }
  .editContent{
    background-color: white;
    width: 500px;
    height: 600px;
    margin: auto;
    margin-top: 50px;
    opacity: 1;
  }
  .title{
    background-color: #2889d8;
    color: white;
    height: 40px;
    line-height: 40px;
  }
  .close{
    float: right;
  }
  .title{
    padding: 0px 20px;
  }
  .editInfor input{
    width: 300px;
  }
</style>
