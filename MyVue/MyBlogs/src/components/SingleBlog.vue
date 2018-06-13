<template>
  <div class="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
export default {
    name:'single-blog',
    data(){
        return {
            id:this.$route.params.id - 1,
            blog:{}
        }
    },
    created(){
        console.log(this.id)
        this.$http.get('http://jsonplaceholder.typicode.com/posts?this.id').then((res) => {
            console.log(res.body[this.id])
            this.blog = res.body[this.id]
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 10px;
        background: #eeeeee;
        border: 1px dotted rebeccapurple;
    }
</style>
