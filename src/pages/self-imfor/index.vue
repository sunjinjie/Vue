<template>
  <div class="imf">
    <leftImf></leftImf>
    <rightImf></rightImf>
    <editInfo v-if="isEditInfo"></editInfo>
  </div>
</template>
<script>
  import leftImf from "./component/left_imfor"
  import rightImf from "./component/right_imfor"
  import editInfo from "./component/editInfor"
  import { mapState } from 'vuex'
  export default {
    name: '',
    data() {
      return {}
    },
    computed: {
      ...mapState(['isEditInfo'])
    },
    components: {
      leftImf,
      rightImf,
      editInfo
    }
  }
</script>
<style>
  .imf{
    height: 600px;
  }
</style>
