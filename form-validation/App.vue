<template>
      <form @submit.prevent="submit">
    <my-input @update="updatel"  :error="username.error" :value="username.value" name="Username" :rules="{required: true, min:5}"/>

    <my-input type="password" :error="password.error" @update="updatel" :value="password.value" name="Password" :rules="{required: true, min:10}"/>
    <my-button background="darkslateblue" color="white" :disabled="!valid"/>

  </form>
</template>

<script>

import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'


export default{ 
    
  components: { MyButton, MyInput },
    data(){
        return {
        
            username:{
                value:'user',
                error: ''
            },
            password:{
                value:'pass',
                error:''
            }
        }
    },
    computed:{
        valid(){
            return(
                !this.username.error && !this.password.error
            )
        }
    },
    methods:{
        updatel({name, value, error}){
        this[name].value = value;
        this[name].error = error
        },
       submit($event){

        console.log('Event', )
       }
    }
}
</script>

<style scoped></style>