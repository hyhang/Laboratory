const routes = [
  {
    path: '/',
    redirect: '/laboratory'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/laboratory',
    redirect: '/laboratory/workspace',
    component: () => import(/* webpackChunkName: "laboratory" */ '../views/Layout.vue'),
    children: [
      {
        path: 'workspace',
        name: 'workspace',
        component: () => import(/* webpackChunkName: "workspace" */ '../views/WorkSpace')
      }
    ]
  }
]

export default routes