<template>
<div class="card">
<div class="title">
    Title
</div>
<div class="content">
    Content
</div>
<div class="description">
   Description
</div>
<button @click="fetchData">Fetch</button>
</div>
</template>

<script>
const api = 'https://pokeapi.co/api/v2/pokemon'
const ids=[1,4,7];
export default{
    methods:{
        async fetchData(){
            const responses = await Promise.all(ids.map(id=> window.fetch(`${api}/${id}`)));
            const json = await Promise.all(responses.map(data=> data.json()));
            console.log('responses\n\n\n', json)
            // const json =await response.json();
            // this.pokeman = {
            //     id: json.id,
            //     name: json.name,
            //     sprite:json.sprites.other['official-artwork'].front_default,
            //     types:json.types.map(type=> type.name)
            // }
            // console.log('response\n\n', this.pokeman)
        }
    },
    data(){
        return {
            pokeman: null,
        }
    }
}
</script>

<style scoped>
.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.title, .content, .description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title, .content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>