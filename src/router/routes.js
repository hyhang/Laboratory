const routes = [
  {
    path: '/',
    redirect: '/laboratory'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login')
  },
  {
    path: '/laboratory',
    redirect: '/laboratory/workspace',
    component: () => import(/* webpackChunkName: "laboratory" */ '../views/Layout'),
    children: [
      {
        path: 'workspace',
        name: 'workspace',
        component: () => import(/* webpackChunkName: "workspace" */ '../views/WorkSpace')
      },
      {
        path: 'analyse',
        name: 'analyse',
        component: () => import(/* webpackChunkName: "analyse" */ '../views/WorkSpace')
      },
      {
        path: 'mock1',
        name: 'mock1',
        component: () => import(/* webpackChunkName: "mock1" */ '../views/Mock1')
      },
      {
        path: 'mock2',
        name: 'mock2',
        component: () => import(/* webpackChunkName: "mock2" */ '../views/WorkSpace')
      },
      {
        path: 'mock3',
        name: 'mock3',
        component: () => import(/* webpackChunkName: "mock3" */ '../views/WorkSpace')
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import(/* webpackChunkName: "setting" */ '../views/WorkSpace')
      },
    ]
  }
]

export default routes