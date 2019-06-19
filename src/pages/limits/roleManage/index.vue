<template>
    <div>
      <el-table :data="rolesList" style="width: 100%;margin-top:30px;" border>
        <el-table-column align="center" label="角色名" width="300">
          <template slot-scope="scope">
            {{ scope.row.rolename }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope)" :disabled="scope.row.rolename==='管理员'?true:false">
              编辑权限
            </el-button>
            <el-button type="danger" size="small" @click="handleDelete(scope)" :disabled="scope.row.rolename==='管理员'?true:false">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog :visible.sync="dialogVisible" title="编辑权限" @close="closeDialog">
        <el-form :model="role" label-width="80px" label-position="left" :rules="rule" ref="role">
          <el-form-item label="角色名" prop="rolename">
            <el-input v-model="role.rolename" placeholder="账号"/>
          </el-form-item>
          <el-form-item label="Menus">
            <el-tree ref="tree" :check-strictly="checkStrictly" :data="routesData" :props="defaultProps" show-checkbox node-key="name" class="permission-tree" />
          </el-form-item>
        </el-form>
        <div style="text-align:right;">
          <el-button type="danger" @click="dialogVisible=false">
            取消
          </el-button>
          <el-button type="primary" @click="confirmRole">
            确定
          </el-button>
        </div>
      </el-dialog>
    </div>
</template>
<script>
import { deepClone } from "../../../utils/deepclone";
import path from 'path'

const defaultRole = {
    username: '',
    name: '',
    password: '',
    surePassword: '',
    email: '',
    routes: []
  }
    export default {

        data() {
          var validateName = (rule, value, callback) => {
            if(value === ''){
              callback(new Error('请输入角色名'));
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
            return {

              rule:{
                rolename: [
                  { validator: validateName, trigger: 'blur' }
                ]
              },
              rolesList: [
                {
                  rolename: "管理员",
                  routes: [
                    {
                      "name": "个人信息"
                    },
                    {
                      "name": "个人通讯录"
                    },
                    {
                      "name": "会议室管理",
                      "children": [
                        {
                          "name": "会议室使用情况"
                        },
                        {
                          "name": "会议室预定"
                        },
                        {
                          "name": "会议管理"
                        }
                      ]
                    },
                    {
                      "name": "权限管理",
                      "children": [
                        {
                          "name": "用户管理"
                        },
                        {
                          "name": "角色管理"
                        },
                        {
                          "name": "添加角色"
                        }
                      ]
                    },
                    {
                      "name": "公告"
                    },
                    {
                      "name": "文件操作",
                      "children": [
                        {
                          "name": "文件上传"
                        },
                        {
                          "name": "文件下载"
                        }
                      ]
                    },
                    {
                      "name": "文本编辑器"
                    },
                    {
                      "name": "用户日志"
                    }
                  ]
                },
                {
                  rolename: "普通员工",
                  routes: [
                    {
                      "name": "个人信息"
                    },
                    {
                      "name": "个人通讯录"
                    },
                    {
                      "name": "会议室管理",
                      "children": [
                        {
                          "name": "会议室使用情况"
                        },
                        {
                          "name": "会议室预定"
                        },
                        {
                          "name": "会议管理"
                        }
                      ]
                    }
                  ]
                }
              ],
              role: Object.assign({}, defaultRole),
              rule: {
                rolename: [
                  { required: true, message: '请输入账号', trigger: 'blur' }
                ]
              },
              routes: [
                {
                  "name": "个人信息"
                },
                {
                  "name": "个人通讯录"
                },
                {
                  "name": "会议室管理",
                  "children": [
                    {
                      "name": "会议室使用情况"
                    },
                    {
                      "name": "会议室预定"
                    },
                    {
                      "name": "会议管理"
                    }
                  ]
                },
                {
                  "name": "权限管理",
                  "children": [
                    {
                      "name": "用户管理"
                    },
                    {
                      "name": "角色管理"
                    },
                    {
                      "name": "添加角色"
                    }
                  ]
                },
                {
                  "name": "公告"
                },
                {
                  "name": "文件操作",
                  "children": [
                    {
                      "name": "文件上传"
                    },
                    {
                      "name": "文件下载"
                    }
                  ]
                },
                {
                  "name": "文本编辑器"
                },
                {
                  "name": "用户日志"
                }
              ],
              dialogVisible: false,
              dialogType: 'new',
              checkStrictly: false,
              defaultProps: {
                children: 'children',
                label: 'name'
              }
            }
        },
      computed: {
        routesData() {
          return this.routes
        }
      },
      methods: {
        closeDialog(){
          // window.location.reload()
        },
        handleDelete({ $index, row }) {
          // this.$confirm('Confirm to remove the role?', 'Warning', {
          //   confirmButtonText: 'Confirm',
          //   cancelButtonText: 'Cancel',
          //   type: 'warning'
          // })
          //   .then(async() => {
          //     await deleteRole(row.username)
          //     this.rolesList.splice($index, 1)
          //     this.$message({
          //       type: 'success',
          //       message: 'Delete succed!'
          //     })
          //   })
          //   .catch(err => { console.error(err) })
        },
        handleAddRole() {
          // this.role = Object.assign({}, defaultRole)
          // if (this.$refs.tree) {
          //   this.$refs.tree.setCheckedNodes([])
          // }
          this.role = {}
          this.dialogType = 'new'
          this.dialogVisible = true
        },
        handleEdit(scope) {
          this.dialogType = 'edit'
          this.dialogVisible = true
          // this.checkStrictly = true
          // console.log(scope.row.routes,this.routes)
          this.role = scope.row
          // this.role = deepClone(scope.row)
          this.$nextTick(() => {
            const routes = this.generateRoutes(this.role.routes)
            this.$refs.tree.setCheckedNodes(this.generateArr(routes))
            // set checked state of a node not affects its father and child nodes
            this.checkStrictly = false
          })
        },

        generateRoutes(routes) {
          const res = []

          for (let route of routes) {
            // skip some route
            if (route.hidden) { continue }

            const onlyOneShowingChild = this.onlyOneShowingChild(route.children, route)

            if (route.children && onlyOneShowingChild) {
              route = onlyOneShowingChild
            }

            const data = {
              name: route.name

            }

            // recursive child routes
            if (route.children) {
              data.children = this.generateRoutes(route.children)
            }
            res.push(data)
          }
          return res
        },
        generateArr(routes) {
          let data = []
          routes.forEach(route => {
            data.push(route)
            if (route.children) {
              const temp = this.generateArr(route.children)
              if (temp.length > 0) {
                data = [...data, ...temp]
              }
            }
          })
          return data
        },
        generateTree(routes, checkedKeys) {
          const res = []

          for (const route of routes) {
            // console.log(route,route.children,route.children.length)
            if (route.children) {
              route.children = this.generateTree(route.children, checkedKeys)
            }

            // console.log(checkedKeys,route.name,checkedKeys.includes(route.name))
            if ( checkedKeys.includes(route.name) || (route.children && route.children.length >= 1)) {
              res.push(route)
            }
          }
          return res
        },
        async confirmRole() {
          this.$refs.role.validate((valid) => {
            if (valid) {
              const checkedKeys = this.$refs.tree.getCheckedKeys()
              console.log(checkedKeys)
              // console.log(this.routes,deepClone(this.routes))
              // this.role.routes = this.generateTree(deepClone(this.routes), checkedKeys)
              // console.log("routes",this.role.routes)
              this.dialogVisible = false
            } else {
              console.log('error submit!!');
              return false;
            }
          });
          //
          // if (isEdit) {
          //   await updateRole(this.role.username, this.role)
          //   for (let index = 0; index < this.rolesList.length; index++) {
          //     if (this.rolesList[index].username === this.role.username) {
          //       this.rolesList.splice(index, 1, Object.assign({}, this.role))
          //       break
          //     }
          //   }
          // } else {
          //   const { data } = await addRole(this.role)
          //   this.role.username = data.username
          //   this.rolesList.push(this.role)
          // }
          //
          // const { description, username, name } = this.role
          // this.dialogVisible = false
          // this.$notify({
          //   title: 'Success',
          //   dangerouslyUseHTMLString: true,
          //   message: `
          //   <div>Role username: ${username}</div>
          //   <div>Role Nmae: ${name}</div>
          //   <div>Description: ${description}</div>
          // `,
          //   type: 'success'
          // })
        },
      onlyOneShowingChild(children = [], parent) {
        let onlyOneChild = null
        const showingChildren = children.filter(item => !item.hidden)
        if (showingChildren.length === 1) {
          onlyOneChild = showingChildren[0]
          return onlyOneChild
        }
        if (showingChildren.length === 0) {
          onlyOneChild = { ... parent, noShowingChildren: true }
          return onlyOneChild
        }

        return false
      }
      }
    }
</script>
<style>

</style>
