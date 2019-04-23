<template>
  <b-form @submit.prevent="guardarCategoria">
    <h1 style="margin-left: 40%">Registrar Categoria</h1>
    <div class="row">
      <div class="col-sm-12">


        <b-form-group label="Nombre" label-for="nombre">
          <b-form-input id="nombre" type="text" required v-model="form.nombre" placeholder="Nombre Categoria"></b-form-input>
        </b-form-group>

        <b-form-group label="Tipo" label-for="tipo">
          <b-form-input id="tipo" type="text" required v-model="form.tipo" placeholder="Tipo Categoria"></b-form-input>
        </b-form-group>


        <div class="row">
          <div class="col-xs-12 offset-sm-5">
            <b-spinner variant="primary" v-if="guardando"></b-spinner>
          </div>
        </div>

        <div style="margin-left: 45%">
          <b-button type="volver" variant="dark" href="/categorias/categoria">Volver</b-button>
          <b-button type="submit" variant="primary" :disabled="guardando">Guardar</b-button>
        </div>
      </div>
    </div>
  </b-form>
</template>

<script>
/* import {db} from ../../services/firebase */
import {db} from '../../services/firebase';

export default{
  data(){
    return{
      form: {
        nombre: '',
        tipo: ' ',
      
      },
      guardando: false,
    }
  },
  methods: {
    guardarCategoria(){
      this.guardando = true
      db.collection('categorias').add(this.form).then(res=>{
        this.$router.push({path: "/categorias/categoria"}) //navegar en 
      alert("guardado")
      })
      
    }
  }
}
</script>

<style>
</style>
