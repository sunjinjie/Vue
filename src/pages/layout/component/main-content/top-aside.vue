<template>
    <aside class="aside__top">
        <span
            class="iconfont iconliebiao toggleNavCollapse"
            :class="{active:isSidebarNavCollapse}"
            @click="toggleNavCollapse"
        >
        </span>
        <el-breadcrumb separator="/">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item
                    v-for="(route,i) in crumbList"
                    :key="route.name"
                    :to="{name:route.name}"
                    v-if="route.name!='home'"
                    :class="{'is-last-link':i==crumbList.length-1}"
                >
                    {{route.meta.name}}
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
        <div class="aside__top--right">
          <el-badge :value="2" class="item">
            <a @click="toOnlineInformation">
              <span size="small" class="iconfont iconicon--1"></span>
            </a>
          </el-badge>
            <span class="iconfont iconoabangong-copy"></span>
            <div class="user-msg">
                <img class="user-img" :src="require('@/assets/image/a.png')" alt="">
                <span class="user-name">{{ UserToken }}</span>
                <el-dropdown trigger="click" placement="top">
                    <span class="el-dropdown-link">
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><a @click="toSelfInfor">个人中心</a></el-dropdown-item>
                      <el-dropdown-item><a @click="troggleSetting">修改密码</a></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="quit-system" @click="loginOut">
                <span class="iconfont icondianyuan"></span>
            </div>
        </div>
    </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['isSidebarNavCollapse', 'crumbList','UserToken'])
    },
    methods: {
      toggleNavCollapse() {
        this.$store.commit('toggleNavCollapse')
      },
      loginOut() {
        this.$store.commit('LOGIN_OUT')
        window.location.reload()
      },
      toSelfInfor(){
        this.$router.push("/self-imf")
      },
      troggleSetting(){
        this.$store.commit("toggleSettingPass")
      },
      toOnlineInformation(){
        console.log("a")
        this.$router.push("/onlineInformation")
      }
    }
}
</script>

<style lang="scss" scoped>
.aside__top {
    border-bottom: 1px solid #e5e5e5;
    height: 50px;
    line-height: 50px;
    position: fixed;
    left: 200px;
    top: 0;
    right: 0;
    background: #eff;
    z-index: 1000;
    transition: left 0.25s;
    .toggleNavCollapse {
        display: inline-block;
        margin-left: 8px;
        padding: 0 10px;
        font-size: 26px;
        vertical-align: middle;
        color: #333;
        cursor: pointer;
        transition: all 0.5s;
        &.active {
            transform: rotate(90deg);
        }
    }

  .aside__top--right {
    position: absolute;
    right: 10px;
    top: -1px;
    bottom: 0px;

    > div {
        position: relative;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        margin-left: 10px;
        padding: 0 15px;
        cursor: pointer;
        &:hover::after {
            transform-origin: 0 0;
            transform: scaleX(1);
        }
        &:first-child:before {
            border: none;
        }
        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: #ef4747;
            transform: scaleX(0);
            transform-origin: right 0;
            transition: transform 0.5s;
        }
        &::before {
            content: '';
            position: absolute;
            height: 20px;
            top: 50%;
            left: -8px;
            margin-top: -10px;
            border-left: 1px solid #ccc;
        }
        &.email {
            i {
                position: absolute;
                left: 18px;
                top: -12px;
                border-radius: 20px;
                background: red;
                color: #fff;
                text-align: center;
                font-size: 12px;
                line-height: 1.5;
                min-width: 20px;
                min-height: 20px;
            }
        }
        &.user-msg {
            .user-img {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                vertical-align: middle;
            }
            .user-name {
                color: #758eb5;
                padding: 0 4px;
            }
        }
        .iconfont {
            position: relative;
            font-size: 24px;
            color: #758eb5;
        }
        sup{
          top: 10px;
        }
    }
  }
}
.breadcrumb-enter,
.breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
    transition: all 0.6s;
}

.breadcrumb-leave-active {
    position: absolute;
}
</style>
<style>
  .aside__top--right .el-badge sup{
    top: 10px;
    right: 30px;
  }
</style>
