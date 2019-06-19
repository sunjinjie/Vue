<template>
  <div>


    <el-tabs v-model="message" style="height: 200px;">
      <el-tab-pane :label="`预约中(${unread.length})`" name="first">
        <el-table :data="unread" :show-header="false" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="与会人员">
                  <span>{{ props.row.join }}</span>
                </el-form-item>
                <el-form-item label="会议地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="会议描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <span class="message-title">{{scope.row.title}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" width="180"></el-table-column>
          <el-table-column width="120">
            <template slot-scope="scope">
              <el-button size="small" @click="handleRead(scope.$index)">取消预约</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane :label="`过去的会议(${read.length})`" name="second">
        <template v-if="message === 'second'">
          <el-table :data="read" :show-header="false" style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="与会人员">
                    <span>{{ props.row.join }}</span>
                  </el-form-item>
                  <el-form-item label="会议地址">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="会议描述">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" width="150"></el-table-column>
            <el-table-column width="120">
              <template slot-scope="scope">
                <el-button type="danger" @click="handleDel(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        tabPosition: 'top',
        message: 'first',
        showHeader: false,
        unread: [{
          date: '2019-04-19 20:00:00',
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
          join: 'a,b,c,d',
          address: '会议室一',
          desc: '好'
        }, {
          date: '2019-04-19 21:00:00',
          title: '今晚12点整发大红包，先到先得',
          join: 'a,b,c,d',
          address: '会议室二',
          desc: '好'
        }],
        read: [{
          date: '2019-04-19 20:00:00',
          title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
          join: 'a,b,c,d',
          address: '会议室三',
          desc: '好'
        }]
      }
    },
    methods: {
      handleRead(index) {
        const item = this.unread.splice(index, 1)
        console.log(item)
        this.read = item.concat(this.read)
      },
      handleDel(index) {
        const item = this.read.splice(index, 1)
      }
    },
    computed: {
      unreadNum() {
        return this.unread.length
      }
    }
  }
</script>
<style>
  .el-tabs__item{
    padding: 0 30px;
  }
  .message-title{
    cursor: pointer;
  }
  .handle-row{
    margin-top: 30px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
