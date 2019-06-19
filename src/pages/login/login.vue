<template>
  <div class="logina">
    <h1 class="l_title">集团协同办公平台</h1>
    <div class="loginAndRe">
      <h2>
        <span :class="{ active: isLogin_span, login_title: true }" @click="toLogin">登录</span> |
        <span :class="{ active: !isLogin_span, back_title: true }" @click="toRetrieve">找回</span>
      </h2>
      <el-form :model="ruleForm" status-icon :rules="rule" ref="ruleForm" class="login-container" v-show="isLogin_span">
        <!-- 账号 -->
        <el-form-item prop="username">
          <el-input ref="username" v-model="ruleForm.username" autocomplete="on" placeholder="请输入账号"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="pass">

          <el-input ref="password" :type="passwordType" v-model="ruleForm.pass" auto-complete="on" placeholder="请输入密码" show-password @keyup.enter="handleLogin"></el-input>

        </el-form-item>
        <!-- 提交 重置 -->
        <el-form-item>
          <!--<el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>-->
          <el-button type="primary" @click="handleLogin()">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="retrieve-wrap" v-show="!isLogin_span">
        <div class="container">
          <div class="section section-subnav">
            <div class="section_subnav">
              <ul class="subnav_process">
                <li>
                  <div>
                    <div :class="{active1: style1}">
                      <i>1</i>
                      <p>填写帐号</p>
                    </div>
                  </div>
                  <i></i>
                </li>
                <li>
                  <div>
                    <div :class="{active2: style2}">
                      <i>2</i>
                      <p>身份验证</p>
                    </div>
                  </div>
                  <i></i>
                </li>
                <li>
                  <div>
                    <div :class="{active3: style3}">
                      <i>3</i>
                      <p>设置新密码</p>
                    </div>
                  </div>
                  <i></i>
                </li>
                <li>
                  <div>
                    <div :class="{active4: style4}">
                      <i>4</i>
                      <p>完成</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!--<el-steps :active="active" finish-status="success">-->
        <!--<el-step title="步骤 1"></el-step>-->
        <!--<el-step title="步骤 2"></el-step>-->
        <!--<el-step title="步骤 3"></el-step>-->
        <!--<el-step title="步骤 4"></el-step>-->
        <!--</el-steps>-->

        <!--<el-button style="margin-top: 12px;" @click="next">下一步</el-button>-->
        <div v-if="style1">
          <el-form :model="rule1" status-icon :rules="rule" ref="rule1">
            <!-- 账号 -->
            <el-form-item prop="newUsername">
              <el-input ref="newUsername" v-model="rule1.newUsername" autocomplete="on" placeholder="请输入账号"></el-input>
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item prop="newCode">

              <el-input ref="newCode" v-model="rule1.newCode" auto-complete="on" placeholder="请输入验证码"></el-input>

            </el-form-item>
            <!-- 提交 重置 -->

            <el-form-item>
              <span class="code-style" @click="createCode">{{verificationCode}}</span>
              <el-button class="confirm-botton" type="primary" @click="toIdentify">下一步</el-button>
            </el-form-item>
          </el-form>

        </div>

        <div v-if="style2">
          <h3>已经给您的邮箱发送验证码，请查收输入</h3>

          <el-form :model="rule2" status-icon :rules="rule" ref="rule2">
            <!-- 验证码 -->
            <el-form-item prop="identifyingCode">
              <el-input ref="identifyingCode" v-model="rule2.identifyingCode" auto-complete="on" placeholder="请输入验证码"></el-input>
            </el-form-item>

            <!-- 提交 重置 -->
            <el-form-item>
              <el-button class="confirm-botton" type="primary" @click="toSetNewPwd">下一步</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div v-if="style3">
          <el-form :model="rule3" status-icon :rules="rule" ref="rule3">
            <el-form-item prop="newPassword">
              <el-input type="newPassword" v-model="rule3.newPassword" autocomplete="on" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="surePassword">
              <el-input type="surePassword" v-model="rule3.surePassword" autocomplete="on" placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="confirm-button" type="primary" @click="toComplete">下一步</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div v-if="style4">
          <h2>
            恭喜！已成功找回密码！
          </h2>
          <button class="confirm-button" @click="toLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import { login, isUserExist } from '@/api/permission'
  // import baseURL from '@/config/baseUrl'
  export default {
    created(){

    },
    data() {
      //用户名的判断
      var validateUsername = (rule, value, callback) => {
        if(value === ''){
          callback(new Error('请输入账号'));
        } else {
          this.isExist = false;
          // console.log(this.user);
          // console.log(this.users[0])
          this.user.username = '';
          this.user.password = '';
          // this.user = {};
          for (var i = 0; i < this.users.length; i++){
            if(this.users[i].username === value){
              this.isExist = true;
              // this.user = this.users[i];
              // console.log("aaa")
              // console.log(this.user)
              this.user.username = this.users[i].username;
              this.user.password = this.users[i].password;
              break;
            }
          }
          if(!this.isExist){
            callback(new Error('账号不存在!'))
          }
          // if(this.users)
          else{
            callback();
          }
        }
      };
      //密码的判断
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if(this.isExist){
            // console.log(this.user.password)
            if (value === this.user.password){
              callback();
            } else {
              callback(new Error('密码有误'));
            }
          }else {
            callback(new Error('账号有误'));
          }
        }
      };
      //找回密码
      var validateNewUser = (rule, value, callback) => {
        if(value === ''){
          callback(new Error('请输入用户名'));
        }else {
          for (var i = 0; i < this.users.length; i++){
            if(this.users[i].username === value){
              callback();
              return ;
            }
          }
          callback(new Error('账号不存在!'))
          // console.log(this.isUserExist())
          // if(!this.isUserExist(value))
          //   callback(new Error('账号不存在!'))
          // else {
          //   callback()
          // }
        }
      };
      var validateNewCode = (rule, value, callback) => {
        if(value === ''){
          callback(new Error('请输入验证码'));
        }else {
          var customerCode = value.toUpperCase();
          if (this.verificationCode !== customerCode){
            callback(new Error('验证码错误'));
          }else{
            callback();
          }
        }
      };
      var validateIdentify = (rule, value, callback) => {
        if(value === ''){
          callback(new Error('请输入验证码'));
        }else {
          //添加一个后端传回来的code和value比较
          callback();
        }
      };
      var validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          // if (this.rule3.surePassword !== '') {
          //   this.$refs.ruleForm.validateField('checkPass');
          // }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.rule3.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          pass: ''
        },
        rule1: {
          newUsername: '',// 找回密码的用户名
          newCode: '',// 验证码
        },
        rule2: {
          identifyingCode: ''//验证码
        },
        rule3: {
          newPassword: '',
          surePassword: ''// 确认密码
        },
        passwordType: 'password',
        // active: 0,
        isExists: false,//账号存在
        isLogin_span: true,
        style1: true,
        style2: false,
        style3: false,
        style4: false,
        // 找回密码
        inputInfo:'',   //用户输入信息
        verificationCode:'',   //生成的验证码
        rule: {
          username: [
            { validator: validateUsername, trigger: 'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          newUsername: [
            { validator: validateNewUser, trigger: 'blur' }
          ],
          newCode: [
            { validator: validateNewCode, trigger: 'blur'}
          ],
          identifyingCode: [
            { validator: validateIdentify, trigger: 'blur' }
          ],
          newPassword: [
            { validator: validatePass1, trigger: 'blur' }
          ],
          surePassword: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        users:[],
        user:{
          username: '',
          password: ''
        },
        // user: {},

        code:''//后端的验证码
      };
    },
    mounted() {

      login().then((res) => {
        // console.log(res.token)
        this.users = res.users
      })
      // console.log(this.isUserExist("admin"))
      // }).catch(e => {
        // console.log(e)
      // })
    },
    methods: {

      // async isUserExist(username){
      //   return await isUserExist(username);
      // },

      mounted() {
        if (this.ruleForm.username === '') {
          this.$refs.username.focus()
        } else if (this.ruleForm.password === '') {
          this.$refs.password.focus()
        }
      },
      // submitForm(formName) {
      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       // alert('submit!');
      //       this.$router.push({ name: 'HelloWorld',params:{user:this.ruleForm.username,pwd:this.ruleForm.password}});
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      //   });
      // },

      // async login() {
      //   try {
      //     let data = await login()
      //     let token = data.token
      //     this.$store.commit('LOGIN_IN', token)
      //     this.$router.replace('/')
      //   } catch (e) {
      //     console.log(e)
      //   }
      // },
        async handleLogin() {
        // this.$axios.get(baseURL+'/static/login.json',{}).then((response) => {
        //   console.log(response)
        // })
        console.log(await login());
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            // this.loading = true
            // this.$store.commit('LOGIN_IN', this.ruleForm)
            // this.$store.commit('SET_USER', this.user);
            this.$store.commit('LOGIN_IN', this.user.username);
            // this.$router.push({ path: this.redirect || '/' })

            this.$router.replace('/')

          } else {
            console.log('error submit!!')
            return false
          }

        })
      },
      // next() {
      //   if (this.active++ > 2) this.active = 0;
      // },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toRetrieve(){// 转换到找回密码面
        this.isLogin_span = false;
        this.createCode();
        this.style1 = true;
        this.style2 = false;
        this.style3 = false;
        this.style4 = false;
      },
      toLogin(){// 转换到登录面
        this.isLogin_span = true;
        this.style1 = false;
        this.style2 = false;
        this.style3 = false;
        this.style4 = false;
      },
      createCode() {    //通过随机数生成验证码
        this.verificationCode = '';
        var code = '';
        var codeLength = 4;     //验证码长度
        // 验证码的随机符号
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        // 产生四个随机符号
        for(var i = 0;i<codeLength;i++){
          var index = Math.floor(Math.random()*36);
          code += random[index];
        }
        this.verificationCode = code
      },
      confirmTheCode() {      //验证函数
        var customerCode = this.inputInfo.toUpperCase();   //把你输入的小写转化为大写
        if(customerCode == 0){
          this.createCode();
          this.inputInfo = '';
          return false;
        }else if(customerCode != this.verificationCode){
          this.createCode();
          this.inputInfo = '';
          return false;
        }else {
          return true;
        }
      },
      toIdentify(){
        this.$refs.rule1.validate(valid => {
          if (valid) {
            //添加一个向后端请求code验证码
            this.style2 = true;
            this.style1 = false;
          }
        })
        // this.next();
      },
      toSetNewPwd(){
        this.$refs.rule2.validate(valid => {
          if (valid) {
            //后端，设置密码
            this.style2 = false;
            this.style3 = true;
          }
        })
        // this.next();
      },
      toComplete(){
        this.$refs.rule3.validate(valid => {
          if (valid) {
            this.style3 = false;
            this.style4 = true;
          }
        })
        // this.next();
      }
    }
  }
</script>
<style>


  .loginAndRe .el-form-item{
    margin-bottom: 5px;
    margin-top: 20px;
  }
  .loginAndRe .el-form-item__error{
    text-align: center;
    width: 300px;
    margin: 0 auto;
    top: 45px;
  }
  .loginAndRe .el-form-item__content{
    height: 70px;
    width: 300px;
    margin: 0 auto;
    text-align: center;
  }
  h2{
    font-size: 30px;
    text-align: center;
    color: #99a9bf;
  }
  .login_title,.back_title{
    font-size: 30px;
  }

  .loginAndRe input{
    display:block;
    width:300px;
    height:40px;
    line-height:40px;
    margin:0 auto;
    margin-bottom: 5px;
    outline:none;
    border:1px solid #888;
    padding:10px;
    box-sizing:border-box;
    border-radius: 5px;
  }
  .loginAndRe button{
    border-radius: 10px;
    width:100px;
    height:40px;
    /*line-height: 40px;*/
    margin:0 auto;
    border:none;
    background-color: #2889d8;
    color:#fff;
    font-size:16px;
    margin-bottom:5px;
  }
  .l_title{
    /*background-color: #2889d8;*/
    /*text-indent: 3em;*/
    padding-top: 100px;
    color: #ededed;
    letter-spacing: 0.5em;
    font-size: 40px;
    margin-bottom: 20px;
    text-align: center;
  }

  .retrieve-wrap{
    text-align:center;
  }
  .loginAndRe span{
    cursor:pointer;
  }

  .loginAndRe span:hover{
    color:#41b883;
  }
  .active {
    color: red;
  }

  .container{
    height: 100px;
  }
  .section{
    margin: auto;
  }
  .subnav_process{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .container .section_subnav .subnav_process>li {
    position: relative;
    display: inline-block;
    /* float: left; */

  }
  .container .section_subnav .subnav_process>li>div {
    text-align: center;
    position: relative;
    float: left;
    width: 80px;
    height: 34px;
    line-height: 30px;
    vertical-align: middle;
    border-radius: 17px;
    background-color: rgb(175, 167, 167);
  }
  .active1,.active2,.active3,.active4{
    background-color: #2889d8;
    width: 80px;
    height: 34px;
    border-radius: 17px;
  }
  .subnav_process p{
    color: #99a9bf;
  }
  .container .section_subnav .subnav_process li>div i {
    background-color: none;
    color: white;
  }
  .container .section_subnav .subnav_process>li>i {
    float: left;
    width: 220px;
    height: 2px;
    margin-top: 14px;
    vertical-align: middle;
    background-color: #ededed;
  }

  .code-box{
    margin-top: 10px;
    text-align: center;
  }
  .code-style{
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 16px;
    color: gold;
    cursor: pointer;
    background-color: black;
  }
  .confirm-botton{
    display: inline-block;
    width: 80px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
  }
  .logina{
    background-color: #223041;
  }
</style>
<style scoped>
</style>
