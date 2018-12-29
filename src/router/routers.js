// 路由嵌套
export default [
  {
    path:'/login',
    name:'login',
    component:()=>import('@/view/login/login')
  },
  {
    path: '/',
    component: () => import('@/view/main/Main'),
    children: [
      {
        path: '/hii',
        components: {
          content: () => import('@/components/HelloWorld')
        }
      },
      {
        path: '/iview',
        components: {
          content: () => import('@/components/IViewDemoPage')
        }
      },
      {
        path: '/vue',
        components: {
          content: () => import('@/components/VueDocument')
        }
      },
      {
        path: '/admin',
        components: {
          content: () => import('@/components/AdminManage')
        }
      },
      {
        path: '/tmp',
        components: {
          tmpView: () => import('@/components/TmpPage')
        }
      }
    ]
  }
]
