<template>

<pokeman-card
:pokemans=" pokemans"
@chosen="fetchEvolutions"
:selectedId="selectedId"
/>

<pokeman-card
:pokemans="evolutions"

/>
</template>

<script>

import PokemanCard from './pokemanCard.vue'
const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS =[1,4,7];
export default{
  components:{ PokemanCard},
  async created(){ this.pokemans = await this.fetchData(IDS)},
  mounted(){console.log('$el', this.$el)},
    methods:{
      async fetchEvolutions(pokemon){
       this.evolutions = await this.fetchData([pokemon.id+1, pokemon.id+2])
       this.selectedId = pokemon.id
      },
        async fetchData(ids){
            const responses = await Promise.all(ids.map(id=> window.fetch(`${api}/${id}`)));
            const json = await Promise.all(responses.map(data=> data.json()));
            console.log('responses\n\n\n', json)
            // const json =await response.json();
            return json.map(datum => ({
                id: datum.id,
                name: datum.name,
                sprite:datum.sprites.other['official-artwork'].front_default,
                types:datum.types.map(type=> type.name)
            }))
            // console.log('response\n\n', this.pokeman)
        }
    },
    data(){
        return {
            pokemans: [],
            evolutions: [],
            selectedId: null
        }
    }
}
</script>

<style scoped>


</style>