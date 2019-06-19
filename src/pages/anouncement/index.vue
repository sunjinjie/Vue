<template>
    <div>

      <el-button type="primary" @click="handleAdd">
        新增公告
      </el-button>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          fixed
          prop="id"
          label="编号"
          show-overflow-tooltip
          width="120">
        </el-table-column>
        <el-table-column
          prop="date"
          label="时间"
          align="center"
          show-overflow-tooltip
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          min-width="300"
          show-overflow-tooltip
          label="标题">
        </el-table-column>
        <el-table-column
          prop="publicdate"
          align="center"
          label="发布日期"
          show-overflow-tooltip
          width="100">
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>



      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
        <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
          <el-form-item label="日期">
            <el-date-picker type="date" placeholder="选择日期" v-model="editForm.date" style="width: 100%"></el-date-picker>
          </el-form-item>
          <el-form-item label="标题">
            <el-input placeholder="输入标题内容" v-model="editForm.name"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="dialogFormVisible=false">取消</el-button>
          <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">添加</el-button>
          <el-button v-else type="primary" @click="updateData">修改</el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {

              dialogStatus: '',
              textMap: {
                update: '编辑',
                create: '新增'
              },
              dialogFormVisible: false,
              editForm: {
                date: '',
                name: '',
              },

              addFormVisible: false, // 新增界面是否显示
              tableData: [
                {
                  id: 1,
                  date: '2019-5-11',
                  name: '啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？啥？',
                  publicdate: '2019-5-10'
                }
              ],
              editFormRules: {

              }
            }
        },
      methods: {

        // 显示编辑界面
        handleEdit(index, row) {
          this.dialogStatus = 'update'
          this.dialogFormVisible = true
          this.editForm = Object.assign({}, row)
        },
        // 显示新增界面
        handleAdd() {
          this.dialogStatus = 'create'
          this.dialogFormVisible = true
          this.editForm = {
            date: '',
            name: '',
          }
        },
        // 编辑
        updateData() {
          // this.$refs.editForm.validate(valid => {
          //   if (valid) {
          //     this.$confirm('确认提交吗？', '提示', {})
          //       .then(() => {
          //         const para = Object.assign({}, this.editForm)
          //         para.birth =
          //           !para.birth || para.birth === ''
          //             ? ''
          //             : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd')
          //         editUser(para).then(res => {
          //           this.$message({
          //             message: '提交成功',
          //             type: 'success'
          //           })
          //           this.$refs['editForm'].resetFields()
          //           this.getUsers()
          //         })
          //       })
          //       .catch(e => {
          //         // 打印一下错误
          //         console.log(e)
          //       })
          //   }
          // })
                    this.dialogFormVisible = false
        },
        // 新增
        createData: function() {
          // this.$refs.editForm.validate(valid => {
          //   if (valid) {
          //     this.$confirm('确认提交吗？', '提示', {})
          //       .then(() => {
          //         this.editForm.id = (parseInt(Math.random() * 100)).toString() // mock a id
          //         const para = Object.assign({}, this.editForm)
          //         console.log(para)
          //
          //         para.birth =
          //           !para.birth || para.birth === ''
          //             ? ''
          //             : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd')
          //         addUser(para).then(res => {
          //           this.$message({
          //             message: '提交成功',
          //             type: 'success'
          //           })
          //           this.$refs['editForm'].resetFields()
          //           this.dialogFormVisible = false
          //           this.getUsers()
          //         })
          //       })
          //       .catch(e => {
          //         // 打印一下错误
          //         console.log(e)
          //       })
          //   }
          // })
          this.dialogFormVisible = false
        },
      }
    }
</script>
<style>

</style>
