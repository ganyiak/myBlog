<template>
  <div class="show-blog" v-theme:column="'narrow'">
      <h1>博客总览</h1>
      <input type="text" placeholder="搜索" v-model="search">
      <div class="single-blog" v-for="(item,index) in filtedBlog" :key="index">
          <router-link :to="'/blog/'+item.id">
              <h2 v-rainbow>{{item.title | to-uppercase}}</h2>
          </router-link>
          
          <article>
              {{item.body | snippet}}
          </article>
      </div>
  </div>
</template>

<script>
export default {
    name:'showblog',
    data(){
        return {
            blogs:[],
            search:''
        }
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then((res) => {
            this.blogs = res.body.slice(0,10);
            console.log(this.blogs)
        })
    },
    computed: {
        filtedBlog(){
           return this.blogs.filter((blog) => {
               return blog.title.match(this.search)
           })
        }
    },
    filters: {
        'to-uppercase'(value){
            return value.toUpperCase();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .show-blog{
        max-width: 800px;
        margin: 0 auto;
    }
    .single-blog{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #ccc;
    }
    a{
        text-decoration: none;
    }
</style>
