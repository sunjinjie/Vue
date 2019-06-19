<template>
  <div class="roleShad">
    <div class="roleContent">
      <div class="roleTitle">
        增加角色
      </div>
      <div class="roleForm">
        <el-form :model="role" :rules="rule" ref="role">
          <el-form-item prop="rolename">
            <el-input placeholder="输入角色名称" class="roleName" :model="role.rolename"></el-input>
            <el-button type="primary" @click="handleAdd">确认添加</el-button>
          </el-form-item>
          <el-form-item>
            <div class="roleMenu">
              <el-tree ref="tree" :check-strictly="checkStrictly" :data="routes" :props="defaultProps" show-checkbox node-key="name" class="permission-tree" />
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: '',
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


              role: {
                rolename: '',
                routes: []
              },
              checkStrictly: false,
              defaultProps: {
                children: 'children',
                label: 'name'
              },
              rule:{
                rolename: [
                  { validator: validateName, trigger: 'blur' }
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
            }
        },
      methods: {
        handleAdd() {

          this.$refs.role.validate((valid) => {
            if (valid) {
              this.dialogVisible = false
            } else {
              console.log('error submit!!');
              return false;
            }
          });
          this.rolename = '';
        }
      }
    }
</script>
<style>

  .roleShad{
    width: 1000px;
    margin: auto;
    margin-top: 30px;
    border: 1px #99a9bf solid;
    box-shadow: 3px 3px #99a9bf;
  }
  .roleTitle{
    font-size: 25px;
    margin: auto;
    padding: 20px;
    text-align: center;
    border-bottom: 1px #99a9bf solid;
  }
  .roleContent{
    margin: 10px;
  }
  .roleForm{
    margin-top: 10px;
  }
  .roleMenu{
    display: block;
    font-size: 20px;
  }
  .roleName{
    float: left;
    display: inline-block;
    width: 200px;
  }
</style>
