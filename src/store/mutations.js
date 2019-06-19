export default {
  LOGIN_IN(state, token) {
    state.UserToken = token
  },
  // SET_USER(state, user) {
  //   state.user = user
  // },
  LOGIN_OUT(state) {
    state.UserToken = ''
    // state.user = {}
  },
  toggleNavCollapse(state) {
    state.isSidebarNavCollapse = !state.isSidebarNavCollapse
  },
  setCrumbList(state, list) {
    state.crumbList = list
  },
  toggleEditInfo(state) {
    state.isEditInfo = !state.isEditInfo
  },
  toggleSettingPass(state) {
    state.isSetting = !state.isSetting
  }
}
