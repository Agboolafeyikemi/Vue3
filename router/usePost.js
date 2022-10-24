import {testPosts} from '../microblog/testPosts.js';
import {ref} from 'vue';

export function usePosts(){
    const posts = ref(testPosts)
    return {
        posts
    }
}