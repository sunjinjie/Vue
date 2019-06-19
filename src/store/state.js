export default {
  get UserToken() {
    return sessionStorage.getItem('token')
  },
  set UserToken(value) {
    sessionStorage.setItem('token', value)
  },
  // 导航菜单是否折叠
  isSidebarNavCollapse: false,
  // 面包屑导航列表
  crumbList: [],
  // 个人信息编辑
  isEditInfo: false,
  // 密码修改框
  isSetting: false,
  //  用户
  // user: {},
}
