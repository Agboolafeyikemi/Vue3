<template>
   <h4>{{post.title}}</h4>
   <p>{{post.content}}</p>
    </template>
    <script>
    import {computed} from 'vue';
       import {useRoute} from 'vue-router';
        import {testPosts} from '../microblog/testPosts';
        import {usePosts} from './usePost'

    export default {

        setup(){
            const postStore = usePosts()
            const route = useRoute();
            const post = computed(()=> postStore.posts.value.find(x => x.id === parseInt(route.params.id, 10)))
            return {
                post
            }
        }
    }
    </script>