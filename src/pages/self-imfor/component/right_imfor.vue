<template>
  <div class="right-imf">
    <div>
      <button @click="editInfor">修改资料</button>
      <div>
        <i class="iconfont iconicon_account"></i>
        <span>{{ user.username }}</span>
        <span>{{ user.name }}</span>
      </div>
      <div>
        <i class="iconfont icongeren1"></i>
        <span>{{ user.sex }}</span>
        <span>{{ user.age }}岁</span>
        <!--<span>{{ user.bornyear }}年{{ user.bornmonth }}月{{ user.bornday }}日</span>-->
        <span>{{ user.born }}</span>
      </div>
      <div>
        <i class="iconfont icontime"></i>
        <span>入职时间: {{ user.worktime}}年</span>
      </div>
      <div>
        <i class="iconfont iconshouji"></i>
        <span>手机：{{ user.mobile }}</span>
      </div>
      <div>
        <i class="iconfont iconweibiaoti-"></i>
        <span>电话：{{ user.tel }}</span>
      </div>
      <div>
        <i class="iconfont iconxiaoxi"></i>
        <span>邮箱：{{ user.email }}</span>
      </div>
      <div>
        <i class="iconfont iconqita"></i>
        <span>暂住地：{{ user.place }}</span>
      </div>
      <div>
        <i class="iconfont iconqita"></i>
        <span>家乡：{{ user.hometown }}</span>
      </div>
      <div>
        <i class="iconfont iconqita"></i>
        <span>个人说明：</span>
        <p>{{ user.selfintro }}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import { login } from '@/api/permission'
  export default {
    name: '',
    data() {
      return {
        // username: "admin",
        // sex: "男",
        // age: 21,
        // bornyear: 1997,
        // bornmonth: 10,
        // bornday: 29,
        // worktime: 3,
        // mobile: 123456789,
        // tel: 1234567,
        // email: "sasd@dcd.com",
        // place: "成都 龙泉驿",
        // hometown: "泸州 纳溪",
        // selfintro: "嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦嗯哼哦"
        user: {}

      }
    },
    created(){
      // console.log(this.$store.state.user)
      // this.user = this.$store.state.user
      console.log(this.$store.state.UserToken)
      this.getInfor();
      // login().then((res) => {
      //   for (var i = 0; i < res.users.length; i++){
      //     if (res.users[i].username == this.$store.state.UserToken) {
      //       this.user = res.users[i];
      //       var d = new Date(this.user.born);
      //       this.user.born = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
      //       break;
      //     }else {
      //       this.user = {};
      //     }
      //   }
      // })
    },
    methods: {

      async getInfor() {
        const res = await login();
        for (var i = 0; i < res.users.length; i++){
          if (res.users[i].username == this.$store.state.UserToken) {
            this.user = res.users[i];
            var d = new Date(this.user.born);
            this.user.born = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
            break;
          }else {
            this.user = {};
          }
        }
        // this.user = res.data
      },
      editInfor(){
        this.$store.commit("toggleEditInfo")
      }
    }
  }
</script>
<style>
  .right-imf{
    display: inline-block;
    position: absolute;
    top: 50px;
    right: 0px;
    width: 50%;
  }
  .right-imf button{
    width: 100px;
    color: #2889d8;
    background-color: white;
    border: 0px;
    font-size: 20px;
  }
  .right-imf>div{
    margin-left: 150px;
    margin-top: 50px;
  }
  .right-imf>div>div{
    margin-top: 10px;
  }
  .right-imf i,.right-imf span{
    font-size: 20px;
  }
  .right-imf i{
    width: 20px;
  }
  .right-imf span{
    margin-left: 20px;
  }
  .right-imf p{
    width: 350px;
    text-indent: 2em;
    font-size: 18px;
    margin-top: 10px;
    border: 1px lightgray solid;
    margin-left: 40px;
  }
</style>
