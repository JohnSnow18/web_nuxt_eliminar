<template>
 <div>
 
 <h1>Hola mundo</h1>
 <button type="button" class="btn btn-success">Iniciar</button>
 <b-button variant="danger">salir</b-button>
 <h2>Hola {{msg}} </h2>
 </div>
    

</template>

<script>
  //import navbar from "../components/navbar"

  export default{
    
      data(){//guardar las variables data
          return{
              msg:"Jhon diaz"
          }
      }
  }

</script>

<style>

</style>