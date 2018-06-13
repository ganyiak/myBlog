<template>
  <div id="app">
    <div class="blog-nav">
      <router-link to='/' class="item" exact>博客总览</router-link>
      <router-link to='/add'  class="item" exact>添加博客</router-link>
    </div>
        <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'


export default {
  name: 'App',
  components: {
    'add-blog':AddBlog,
    'show-blog':ShowBlog
  }
}
</script>

<style scoped>
  .blog-nav{
    margin: 0 auto;
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #ffffff;
    background: aquamarine;
    height: 100px;
    line-height: 100px;
  }
  a{
    text-decoration: none;
    color: #ffffff;
    padding: 10px;
  }
  .router-link-active{
    background-color: rgba(255,255,255,0.8);
    color: coral;
  }
</style>
