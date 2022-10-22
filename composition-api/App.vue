<template>
  
    <button @click="increment">{{count}}</button>
    <button @click="a++">{{a}}</button>
    <button @click="b++">{{b}}</button>
    <p>{{total}}</p>
    <div 
    v-for="number in history" 
    :key="number">
     {{number}}
    </div>
</template>

<script>
import {ref,computed, watch,watchEffect,reactive} from 'vue';
import {useNumbers} from './useNumber.js'

export default{
    setup(){
        const count = ref(0);
        const increment=()=> {count.value++}
        
        const {a, b, total, history} = useNumbers();

        return {a,b,count,history, increment, total};
    }
}
</script>

<style scoped>
p {
    font-size: 50px;
}
button{
    height:100px;
    width:100px;
    font-size: 50px;
}
</style>