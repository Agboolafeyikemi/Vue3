import {ref,computed, watch,watchEffect,reactive} from 'vue';
export function useNumbers(){
    const a = ref(1);
    const b = ref(2);
    const history = ref([]);

    const increment=()=> {count.value++}
    

    const total = computed(()=> {return  a.value+ b.value});

    watch([a,b], ([newA, newB], [oldA, oldB]) => {
     if(newA !== oldA){
       history.value.push(`${oldA} => ${newA}`)
     }
     if(newB !== oldB){
        history.value.push(`${oldB} => ${newB}`)
    }
    }, {immediately: true })

    return {a,b,history, increment,  total};

}