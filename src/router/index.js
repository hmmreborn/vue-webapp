import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import NotFound from '@/views/NotFound'
import Home from '@/views/Home'
import User from '@/views/User'
import Office from '@/views/Office'
import Setting from '@/views/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
    		title: 'Login'
    	}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
    		title: 'Login'
    	}
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
    		title: 'Register'
    	}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
    		title: 'Home'
    	}
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
    		title: 'User'
    	}
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      meta: {
    		title: 'Office'
    	}
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
      meta: {
    		title: 'Setting'
    	}
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: {
    		title: '找不到页面'
    	}
    },
  ],
  linkActiveClass: 'is-active'
})
