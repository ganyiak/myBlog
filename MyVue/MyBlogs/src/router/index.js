import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowBlog from '@/components/ShowBlog'
import AddBlog from '@/components/AddBlog'
import SingleBlog from '@/components/SingleBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: ShowBlog},
    {path: '/add',component: AddBlog},
    {path: '/blog/:id',component: SingleBlog}
  ],
  mode:'history'
})
