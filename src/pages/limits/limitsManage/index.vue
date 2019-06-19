<template>
    <div>
      <el-button type="primary" @click="handleAdduser">
        新增用户
      </el-button>
      <el-table :data="userList" style="width: 100%;margin-top:30px;" border>
        <el-table-column align="center" label="账号" width="220">
          <template slot-scope="scope">
            {{ scope.row.username }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="姓名" width="220">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column align="header-center" label="邮箱">
          <template slot-scope="scope">
            {{ scope.row.email }}
          </template>
        </el-table-column>
        <el-table-column align="header-center" label="角色">
          <template slot-scope="scope">
            {{ scope.row.role }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope)" :disabled="scope.row.username==='admin'?true:false">
              编辑
            </el-button>
            <el-button type="danger" size="small" @click="handleDelete(scope)" :disabled="scope.row.username==='admin'?true:false">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'编辑':'新建'" @close="closeDialog">
        <el-form :model="user" label-width="80px" label-position="left" :rules="rule" ref="user">
          <el-form-item label="账号" v-if="dialogType==='edit'?true:false">
            <el-input v-model="user.username" placeholder="账号" :disabled="true"/>
          </el-form-item>
          <el-form-item label="账号" prop="username" v-if="dialogType==='edit'?false:true">
            <el-input v-model="user.username" placeholder="账号"/>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="user.name" placeholder="姓名"/>
          </el-form-item>
          <el-form-item label="密码" v-if="dialogType==='edit'?false:true" prop="password">
            <el-input type="password" v-model="user.password" placeholder="密码"/>
          </el-form-item>
          <el-form-item label="确认密码" v-if="dialogType==='edit'?false:true" prop="surePassword">
            <el-input type="password" v-model="user.surePassword" placeholder="确认密码"/>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="user.email"
              type="email"
              placeholder="邮箱"
            />
          </el-form-item>
          <el-form-item label="角色" prop="role">
            <el-select v-model="role" placeholder="请选择">
              <el-option
                v-for="item in roles"
                :key="item.rolename"
                :label="item.rolename"
                :value="item.rolename">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div style="text-align:right;">
          <el-button type="danger" @click="dialogVisible=false">
            取消
          </el-button>
          <el-button type="primary" @click="confirmuser">
            确定
          </el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
import { deepClone } from "../../../utils/deepclone";
import path from 'path'

const defaultuser = {
    username: '',
    name: '',
    password: '',
    surePassword: '',
    email: '',
    role: ''
  }
    export default {

        data() {
          var validateUser = (rule, value, callback) => {
            if(value === ''){
              callback(new Error('请输入用户名'));
            }else {
              // for (var i = 0; i < this.users.length; i++){
              //   if(this.users[i].username === value){
              //     callback();
              //     return ;
              //   }
              // }
              // callback(new Error('账号不存在!'))
              callback();
            }
          };
          var validatePass1 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              // if (this.user.surePassword !== '') {
              //   this.$refs.ruleForm.validateField('checkPass');
              // }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.user.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
          };
          var validateRole = (rule, value, callback) => {
            if (this.role === ''){
              callback(new Error('必须选择一项'))
            }else {
              callback()
            }
          }
            return {
              userList: [
                {
                  username: "admin",
                  name: "管理员",
                  email: "592513724@qq.com",
                  role: "管理员"
                },
                {
                  username: "en",
                  name: "saa",
                  email: "555665@assa.com",
                  role: "普通用户"
                }
              ],
              user: Object.assign({}, defaultuser),
              rule: {
                username: [
                  { required: true, message: '请输入账号', trigger: 'blur' },
                  { validator: validateUser, trigger: 'blur' }
                ],
                password: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
                  { validator: validatePass1, trigger: 'blur' }
                ],
                surePassword: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
                  { validator: validatePass2, trigger: 'blur' }
                ],
                email: [
                  { type: 'email', required: true, trigger: 'blur' }
                ],
                role: [
                  { validator: validateRole, message: '必须选择一项', trigger: 'blur' }
                ]
              },
              roles: [
                { rolename: "管理员" },
                { rolename: "普通员工" }
              ],
              role: '',
              dialogVisible: false,
              dialogType: 'new',
              // checkStrictly: false,
              // defaultProps: {
              //   children: 'children',
              //   label: 'name'
              // }
            }
        },
      computed: {
        // routesData() {
        //   return this.routes
        // }
      },
      methods: {
        closeDialog(){
          window.location.reload()
        },
        handleDelete({ $index, row }) {
          this.$confirm('确认删除?', '警告', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
            .then(async() => {
              // await deleteuser(row.username)
              // this.userList.splice($index, 1)
              this.$message({
                type: 'success',
                message: '删除成功'
              })
            })
            .catch(err => { console.error(err) })
        },
        handleAdduser() {
          this.user = {}
          this.role = ''
          this.dialogType = 'new'
          this.dialogVisible = true
        },
        handleEdit(scope) {
          this.dialogType = 'edit'
          this.dialogVisible = true
          this.role = ''
          this.user = scope.row
        },
        async confirmuser() {
          console.log(this.role)
          this.$refs.user.validate((valid) => {
            if (valid) {
              this.dialogVisible = false
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
    }
</script>
<style>

</style>
