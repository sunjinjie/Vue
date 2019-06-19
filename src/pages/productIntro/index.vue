<template>
  <!--首页content界面-->
    <div>
        <!--<router-view></router-view>-->
        <!--<TotalStatus/>-->
        <!--<TodoList/>-->
        <!--<Charts/>-->
      <div>
        <h3>公司介绍</h3>
        <card2></card2>
      </div>
      <div>
        <h3>boss介绍</h3>
        <card1></card1>
      </div>
      <div>
        <h3>开发</h3>
        <developer></developer>
      </div>
    </div>
</template>

<script>
import card1 from './component/card1'
import card2 from './component/card2'
import developer from './component/developer'

export default {
    data() {
        return {}
    },
    mounted() {

    },
    components: {
        // TotalStatus,
        // TodoList,
        // Charts
      card1,
      card2,
      developer
    }
}
</script>
<style scoped>
  h3{
    font-size: 30px;
    text-align: center;
    margin: 20px auto;
  }
</style>
