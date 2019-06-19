
/* 需要权限判断的路由 */
const dynamicRoutes = [
  {
    path: '/self-imf',
    name: 'self-imf',
    component: () => import('../pages/self-imfor'),
    meta: {
      name: '个人信息',
      icon: 'icongeren'
    }
  },
  {
    path: "/personalPhone",
    name: "personalPhone",
    component: () => import('../pages/personalPhonebook'),
    meta: {
      name: "个人通讯录",
      icon: "icontongxunlu"
    }
  },
  {
    path: '/meeting',
    component: () => import('../pages/meetingManage'),
    name: 'meeting',
    meta: {
      name: '会议室管理',
      icon: 'iconhuiyishi'
    },
    children: [
      {
        path: 'roomusage',
        name: 'roomusage',
        component: () => import('../pages/meetingManage/roomUsage'),
        meta: {
          name: '会议室使用情况',
          icon: 'icontubiao'
        }
      },
      {
        path: 'bookroom',
        name: 'bookroom',
        component: () => import('../pages/meetingManage/bookRoom'),
        meta: {
          name: "会议室预定",
          icon: "iconxinzeng1"
        }
      },
      {
        path: 'meetings',
        name: 'meetings',
        component: () => import('../pages/meetingManage/meeting'),
        meta: {
          name: "会议管理",
          icon: "iconxinzeng1"
        }
      }
    ]
  },
  {
    path: '/limits',
    component: () => import('../pages/limits'),
    name: 'limits',
    meta: {
      name: '权限管理',
      icon: 'iconic_opt_feature'
    },
    children: [
      {
        path: 'limitsManage',
        name: 'limitsManage',
        component: () => import('../pages/limits/limitsManage'),
        meta: {
          name: "用户管理",
          icon: "iconquanxian"
        }
      },
      {
        path: 'roleManage',
        name: 'roleManage',
        component: () => import('../pages/limits/roleManage/index'),
        meta: {
          name: "角色管理",
          icon: "iconquanxian"
        }
      },
      {
        path: 'addRole',
        name: 'addRole',
        component: () => import('../pages/limits/addRole'),
        meta: {
          name: "添加角色",
          icon: "iconxinzengke"
        }
      }
    ]
  },

  {
    path: "/anouncement",
    name: "anouncement",
    component: () => import('../pages/anouncement'),
    meta: {
      name: "公告",
      icon: "icongonggao"
    }
  },
  {
    path: '/fileOpration',
    component: () => import('../pages/fileOpration'),
    name: 'fileOpration',
    meta: {
      name: '文件操作',
      icon: 'iconiconset0118'
    },
    children: [
      {
        path: 'fileUpload',
        name: 'fileUpload',
        component: () => import('../pages/fileOpration/fileUpload'),
        meta: {
          name: '文件上传',
          icon: 'iconxinzeng'
        }
      },
      {
        path: 'fileDownload',
        name: 'fileDownload',
        component: () => import('../pages/fileOpration/fileDownload'),
        meta: {
          name: "文件下载",
          icon: "iconwendang"
        }
      }
    ]
  },
  {
    path: "/textEditor",
    name: "textEditor",
    component: () => import('../pages/textEditor'),
    meta: {
      name: "文本编辑器",
      icon: "icontongxunlu"
    }
  },
  {
    path: "/journal",
    name: "journal",
    component: () => import('../pages/journal'),
    meta: {
      name: "用户日志",
      icon: "iconrizhi"
    }
  }
]

export default dynamicRoutes
