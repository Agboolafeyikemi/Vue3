
<template>
<h3>New Post</h3>
<form @submit.prevent="submit">
    <input
        v-model="newPost.title"
        placeholder="Title"
    />
    <br/>
    <br/>
    <textarea
    cols="50"
    rows="10"
    v-model="newPost.content"
    />
    <br/>
    <button>Submit</button>
</form>
</template>
<script>
import {reactive} from 'vue';
import {usePosts} from './usePost.js'
    export default {
     
        setup(){
            const postStore = usePosts();
            const newPost= reactive({
            title:'',
            content:''
        })
        const submit=()=> {
            postStore.posts.value.push({
                id:newPost.posts.value.length +1,
                title: newPost.title,
                content:newPost.content
            })
        }
    return{
newPost
    }
        }
    }
</script>