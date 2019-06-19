<template>
    <div class="main-container">
        <TopAside/>
        <Content/>
        <setting></setting>
    </div>
</template>

<script>
import TopAside from './top-aside'
import Content from './content'
import setting from './setting'
import { mapState } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState(['isSidebarNavCollapse'])
    },
    components: {
      TopAside,
      Content,
      setting
    }
}
</script>
