import { fetchPermission } from '@/api/permission'
import router, { DynamicRoutes } from '@/router/index'
import { recursionRouter, setDefaultRoute } from '@/utils/recursion-router'
import dynamicRouter from '@/router/dynamic-router'
import { deepClone } from "../../utils/deepclone";
import { generateTree } from "../../utils/generateTree";

export default {
    namespaced: true,
    state: {
        permissionList: null /** 所有路由 */,
        sidebarMenu: [] /** 导航菜单 */,
        currentMenu: '' /** 当前active导航菜单 */
    },
    getters: {},
    mutations: {
        SET_PERMISSION(state, routes) {
            state.permissionList = routes
        },
        CLEAR_PERMISSION(state) {
            state.permissionList = null
        },
        SET_MENU(state, menu) {
            state.sidebarMenu = menu
        },
        CLEAR_MENU(state) {
            state.sidebarMenu = []
        },
        SET_CURRENT_MENU(state, currentMenu) {
            state.currentMenu = currentMenu
        }
    },
    actions: {
        async FETCH_PERMISSION({ commit, state }) {

          let permissionList = await fetchPermission()
          // console.log(permissionList)


          // let allRoutes = [
          //   {
          //     "name": "个人信息"
          //   },
          //   {
          //     "name": "个人通讯录"
          //   },
          //   {
          //     "name": "会议室管理",
          //     "children": [
          //       {
          //         "name": "会议室使用情况"
          //       },
          //       {
          //         "name": "会议室预定"
          //       },
          //       {
          //         "name": "会议管理"
          //       }
          //     ]
          //   },
          //   {
          //     "name": "权限管理",
          //     "children": [
          //       {
          //         "name": "用户管理"
          //       },
          //       {
          //         "name": "角色管理"
          //       },
          //       {
          //         "name": "添加角色"
          //       }
          //     ]
          //   },
          //   {
          //     "name": "公告"
          //   },
          //   {
          //     "name": "文件操作",
          //     "children": [
          //       {
          //         "name": "文件上传"
          //       },
          //       {
          //         "name": "文件下载"
          //       }
          //     ]
          //   },
          //   {
          //     "name": "文本编辑器"
          //   },
          //   {
          //     "name": "用户日志"
          //   }
          // ];
          //
          //
          // var List = await fetchPermission()
          // console.log(List)
          // console.log("r",allRoutes)
          // // console.log(deepClone(this.state.allRoutes))
          // // var r = deepClone(this.state.allRoutes)
          //
          // let permissionList = generateTree(allRoutes, List)



            /*  根据权限筛选出我们设置好的路由并加入到path=''的children */
            let routes = recursionRouter(permissionList, dynamicRouter)
            let MainContainer = DynamicRoutes.find(v => v.path === '')
            let children = MainContainer.children
            children.push(...routes)

            /* 生成左侧导航菜单 */
            commit('SET_MENU', children)

            /*
                为所有有children的菜单路由设置第一个children为默认路由
                主要是供面包屑用，防止点击面包屑后进入某个路由下的 '' 路由,比如/manage/
                而我们的路由是
                [
                    /manage/menu1,
                    /manage/menu2
                ]
            */
            setDefaultRoute([MainContainer])

            /*  初始路由 */
            let initialRoutes = router.options.routes

            /*  动态添加路由 */
            router.addRoutes(DynamicRoutes)

            /* 完整的路由表 */
            commit('SET_PERMISSION', [...initialRoutes, ...DynamicRoutes])
        }
    }
}
