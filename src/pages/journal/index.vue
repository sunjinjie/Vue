<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      stripe
      :default-sort = "{prop: 'date', order: 'descending'}"
    >
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="action"
        label="动作"
        :formatter="formatter">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2019-5-11 21:27:30',
          name: '王小虎',
          action: '登录'
        }, {
          date: '2019-5-11 21:27:30',
          name: '王小虎',
          action: '登录'
        }, {
          date: '2019-5-11 21:27:30',
          name: '王小虎',
          action: '登录'
        }, {
          date: '2019-5-11 21:27:30',
          name: '王小虎',
          action: '登录'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.action;
      }
    }
  }
</script>
<style>

</style>
