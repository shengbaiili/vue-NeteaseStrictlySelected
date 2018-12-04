import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../pages/Main/Main.vue'
import Classify from '../pages/Classify/Classify.vue'
import Reading from '../pages/Reading/Reading.vue'
import Shoppings from '../pages/Shoppings/Shoppings.vue'
import Personal from '../pages/Personal/Personal.vue'

Vue.use(VueRouter)
export default new VueRouter ({
  mode:'history',
  routes:[
    {
      path:'/main',
      component:Main,
      meta: {
        isShow: true
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta: {
        isShow: true
      }
    },
    {
      path:'/reading',
      component:Reading,
      meta: {
        isShow: true
      }
    },
    {
      path:'/shoppings',
      component:Shoppings,
      meta: {
        isShow: true
      }
    },
    {
      path:'/personal',
      component:Personal,
      meta: {
        isShow: true
      }
    },
    {
      path: '/',
      redirect: '/main'
    }

  ]
})
