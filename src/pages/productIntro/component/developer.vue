<template>
    <div class="develop">
      <h4>前端项目开发：{{ developerName }}</h4>
      <p>{{ intro }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
          developerName: 's进j',
          intro: '参照网上一些大神的界面，代码才写出的这个前端的项目,用到了 vue(框架) 、 Element-UI(组件) 、vue-router(动态路由加载nav) 、 vuex(权限控制) 、axios(数据请求)等'
        }
    }
}
</script>

<style>
  .develop h4,.develop p{
    border: #99a9bf 1px solid;
    padding: 5px 0;
    margin: 2px 0;
  }
  .develop h4{
    text-indent: 2em;
    font-weight: bolder;
  }
  .develop p{
    text-indent: 4em;
    margin-bottom: 200px;
  }
</style>
