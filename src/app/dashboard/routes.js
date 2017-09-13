
/**
* Components are lazy-loaded - See "Grouping Components in the Same Chunk"
* http://router.vuejs.org/en/advanced/lazy-loading.html
*/
/* eslint-disable global-require */
const Dashboard = r => require.ensure([], () => r(require('./main')), 'dashboard-bundle')
const PageNotFount = r => require.ensure([], () => r(require('../pages/404')), 'dashboard-bundle')
const Home = r => require.ensure([], () => r(require('../pages/home.vue')), 'dashboard-bundle')

export default [
  {
    name: 'dashboard.index',
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: { requiresAuth: false }
  },
  {
    name: '404',
    path: '*',
    component: PageNotFount,
    meta: { requiresAuth: false }
  }
]
