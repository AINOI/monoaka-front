import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Mono‘s Archive'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      title: 'Mono‘s Archive | Register'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: 'Mono‘s Archive | Login'
    }
  },
  {
    path: '/MNovels',
    name: 'mnovels',
    component: () => import(/* webpackChunkName: "mnovels" */ '../views/MNovels.vue'),
    meta: {
      title: 'Mono‘s Archive | MNovels'
    }
  },
  {
    path: '/MAbout',
    name: 'mabout',
    component: () => import(/* webpackChunkName: "mabout" */ '../views/MAbout.vue'),
    meta: {
      title: 'Mono‘s Archive | MAbout'
    }
  },
  {
    path: '/MRules',
    name: 'mrules',
    component: () => import(/* webpackChunkName: "mrules" */ '../views/MRules.vue'),
    meta: {
      title: 'Mono‘s Archive | MRules'
    }
  },
  {
    path: '/MReport',
    name: 'mreport',
    component: () => import(/* webpackChunkName: "mreport" */ '../views/MReport.vue'),
    meta: {
      title: 'Mono‘s Archive | MReport'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/admin/Admin.vue'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/AdminHome.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'Mono‘s Archive | AdminHome'
        }
      },
      {
        path: 'admincarousel',
        name: 'AdminCarousel',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/AdminCarousel.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'Mono‘s Archive | Novels Manager'
        }
      },
      {
        path: 'adminnovels',
        name: 'AdminNovels',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/AdminNovels.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'Mono‘s Archive | Novels Manager'
        }
      },
      {
        path: 'adminmembers',
        name: 'AdminMembers',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/AdminMembers.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'Mono‘s Archive | Members Manager'
        }
      },
      {
        path: 'adminissues',
        name: 'AdminIssues',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin/AdminIssues.vue'),
        meta: {
          login: true,
          admin: true,
          title: 'Mono‘s Archive | Issues Manager'
        }
      }
    ]
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import(/* webpackChunkName: "member" */ '../views/member/Member.vue'),
    children: [
      {
        path: '',
        name: 'MemberHome',
        component: () => import(/* webpackChunkName: "member" */ '../views/member/MemberHome.vue'),
        meta: {
          login: true,
          title: 'Mono‘s Archive | 創作者首頁'
        }
      },
      {
        path: 'memberinfo',
        name: 'MemberInfo',
        component: () => import(/* webpackChunkName: "member" */ '../views/member/MemberInfo.vue'),
        meta: {
          login: true,
          title: 'Mono‘s Archive | 創作者資訊'
        }
      },
      {
        path: 'membernovels',
        name: 'MemberNovels',
        component: () => import(/* webpackChunkName: "member" */ '../views/member/MemberNovels.vue'),
        meta: {
          login: true,
          title: 'Mono‘s Archive | 作品頁面'
        },
        children: [
          {
            path: 'membernovelsList',
            name: 'MemberNovelsList',
            component: () => import(/* webpackChunkName: "member" */ '../views/member/MemberNovelsList.vue'),
            meta: {
              login: true,
              title: 'Mono‘s Archive | 作品頁面List'
            }
          },
          {
            path: 'membernovelsWrite',
            name: 'MemberNovelsWrite',
            component: () => import(/* webpackChunkName: "member" */ '../views/member/MemberNovelsWrite.vue'),
            meta: {
              login: true,
              title: 'Mono‘s Archive | 作品頁面Write'
            }
          }
        ]
      },
      {
        path: 'memberfriends',
        name: 'MemberFriends',
        component: () => import(/* webpackChunkName: "member" */ '../views/member/MemberFriends.vue'),
        meta: {
          login: true,
          title: 'Mono‘s Archive | 好友列表'
        }
      },
      {
        path: 'membertegami',
        name: 'MemberTegami',
        component: () => import(/* webpackChunkName: "member" */ '../views/member/MemberTegami.vue'),
        meta: {
          login: true,
          title: 'Mono‘s Archive | 創作者手紙'
        }
      },
      {
        path: 'memberfavorite',
        name: 'MemberFavorite',
        component: () => import(/* webpackChunkName: "member" */ '../views/member/MemberFavorite.vue'),
        meta: {
          login: true,
          title: 'Mono‘s Archive | 喜愛作品'
        }
      }
    ]
  },
  {
    path: '/novelpage/:id',
    name: 'NovelPage',
    component: () => import(/* webpackChunkName: "novelpage" */ '../views/NovelPage.vue'),
    meta: {
      title: 'Mono‘s Archive | NovelPage'
    }
  },
  {
    path: '/memberothers/:id',
    name: 'MemberOthers',
    component: () => import(/* webpackChunkName: "memberothers" */ '../views/memberothers/MemberOthers.vue'),
    children: [
      {
        path: '',
        name: 'MemberOthersHome',
        component: () => import(/* webpackChunkName: "member" */ '../views/memberothers/MemberOthersHome.vue'),
        meta: {
          title: 'Mono‘s Archive | 創作者首頁'
        }
      },
      {
        path: 'memberothersnovels',
        name: 'MemberOthersNovels',
        component: () => import(/* webpackChunkName: "member" */ '../views/memberothers/MemberOthersNovels.vue'),
        meta: {
          title: 'Mono‘s Archive | 創作者首頁'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const user = store.getters['user/user']
  if (to.meta.login && !user.isLogin) {
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
