<template>
  <div class="roleShad">
    <div class="roleContent">
      <div class="roleTitle">
        设置角色权限
      </div>
      <div class="roleForm">
        <el-form>
          <el-form-item>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in roles"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button type="primary">确认修改</el-button>
            <!--<el-input placeholder="输入角色" class="rolename"></el-input>-->
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
          return {
            roles: [{
              value: '经理',
              label: '经理'
            }, {
              value: '普通用户',
              label: '普通用户'
            }],
            value: '经理',

            checkStrictly: false,
            defaultProps: {
              children: 'children',
              label: 'name'
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
                    "name": "设置权限"
                  },
                  {
                    "name": "角色管理"
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
</style>
