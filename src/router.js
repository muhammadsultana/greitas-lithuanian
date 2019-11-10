import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '',
      component: () => import('./views/Home.vue'),
    },
  ],
});

export default router;
