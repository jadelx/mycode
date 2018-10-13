import Vue from 'vue';
import Router from 'vue-router';
import Home from '../page/home/home';
import Picture from '../page/home/picture';
Vue.use(Router);

//webpack按需加载组件
// const home = r =>
//   require.ensure([], () => r(require('../page/home/home')), ' home');
export default new Router({
  routes: [
    {
      path: '/',
      name: 'picture',
      component: Picture
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
});

// const picture = r =>
//   require.ensure([], () => r(require('../page/home/picture')), ' picture');
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       redirect: '/home'
//     },
//     {
//       path: '/home',
//       name: 'picture',
//       component: picture
//     }
//   ]
// });
