<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <form v-if="!isShow">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required>
        <br>
        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>

        <div class="check-box">
            <label>Vue.js</label>
            <input type="checkbox" value="Vue.js" v-model="blog.classess">
            <label>node.js</label>
            <input type="checkbox" value="node.js" v-model="blog.classess">
            <label>React.js</label>
            <input type="checkbox" value="React.js" v-model="blog.classess">
            <label>Abgular.js</label>
            <input type="checkbox" value="Abgular.js" v-model="blog.classess">
        </div>

        <label>作者</label>
        <select v-model="blog.author">
            <option v-for="(item,index) in authors" :key="index">{{item}}</option>
        </select>
        <button @click.prevent="post">添加博客</button>
    </form>
    <div>
        <h1 v-if="isShow">你的博客发布成功</h1>
    </div>
    <div class="preview">
        <h3>博客总览</h3>
        <p>博客标题：{{blog.title}}</p>
        <p>博客内容:</p>
        <p>{{blog.content}}</p>
        <p>博客分类：</p>
        <ul>
            <li v-for="(item,index) in blog.classess" :key="index">
                {{item}}
            </li>
        </ul>
        <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
// http://jsonplaceholder.typicode.com/posts
export default {
    name:'add-blog',
    data(){
        return {
            blog:{
                title:"",
                content:"",
                classess:[],
                author:""
            },
             authors:['矛盾','鲁迅','陈独秀'],
             isShow:false
        }
    },
    methods: {
        post(){
            console.log("5555")
            this.isShow = true
            this.$http.post('http://jsonplaceholder.typicode.com/posts',{
                title:this.blog.title,
                body:this.blog.content,
                userId:1
            }).then((res) => {
                console.log(res)
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .add-blog *{
        box-sizing: border-box;
    }
    .add-blog{
        margin: 20px auto;
        max-width: 600px;
        padding: 20px;
    }
    label{
        display: block;
        margin: 20px 0 10;
    }
    input[type='text'],textarea,select{
        display: block;
        width: 100%;
        padding: 8px;
    }
    textarea{
        height: 200px;
    }
    .check-box label{
        display: inline-block;
        margin-top: 0;
    }
    .check-box input{
        display: inline-block;
        margin-right: 10px;
    }
    button{
        display: block;
        margin: 20px 0;
        background: #ff6600;
        color: #fff;
        border: 0;
        padding: 14px;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
    }
    .preview{
        padding: 10px 20px;
        border: 1px dotted #ff6600;
        margin: 30px 0;
    }
    .preview h3{
        margin-top: 10px;
    }
</style>
