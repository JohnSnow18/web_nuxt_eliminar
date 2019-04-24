<template>
  <b-form @submit.prevent="guardarProducto">
    <h1 style="margin-left: 40%">Registrar Producto {{producto}}</h1>
    <div class="row">
      <div class="col-sm-12">
        <b-form-group label="Imagen" label-for="imagen">
          <b-form-file id="imagen" placeholder="Cargar Imagen" drop-placeholder="Cargar Imagen" accept="image/*" v-model="imageProduct"/>
        </b-form-group>

        <b-form-group label="Nombre" label-for="nombre">
          <b-form-input id="nombre" type="text" required v-model="form.nombre" placeholder="Nombre producto"></b-form-input>
        </b-form-group>

        <b-form-group label="Precio" label-for="precio">
          <b-form-input id="precio" type="text" required v-model="form.precio" placeholder="Precio producto"></b-form-input>
        </b-form-group>

        <b-form-group label="Cantidad" label-for="cantidad">
          <b-form-input id="cantidad" type="number" required v-model="form.cantidad" placeholder="Cantidad producto"></b-form-input>
        </b-form-group>

        <div class="row">
          <div class="col-xs-12 offset-sm-5">
            <b-spinner variant="primary" v-if="guardando"></b-spinner>
          </div>
        </div>

        <div style="margin-left: 45%">
          <b-button type="volver" variant="dark" href="../productos">Volver</b-button>
          <b-button type="submit" variant="primary" :disabled="guardando">Guardar</b-button>
        </div>
      </div>
    </div>
  </b-form>
</template>

<script>
/* import {db} from ../../services/firebase */
import {db, storage} from '../../services/firebase';

export default{

        asyncData({params}){

        return db.collection('productos').doc(params.id).get().then(res=>{
            return{
                producto: res.data(),
               
                id: params.id,
                 nombre: res.data().nombre
            }
            
        })
    },
  data(){
    return{
      form: {
        nombre: '',
        cantidad: ' ',
        precio: ' '
      },
      guardando: false,
      imageProduct: null
    }
  },
  methods: {
    guardarProducto(){
      this.guardando = true
      
      let imageRef=storage.child(this.imageProduct.name)
      imageRef.put(this.imageProduct).then( async imageRes=>{
        this.form.image = await imageRes.ref.getDownloadURL() //obtener la url de la imagen
      

      db.collection('productos').add(this.form).then(res=>{
        this.$router.push({path: "/productos"}) //navegar en 
      alert("guardado")
      })

    })
      
    }
  }
}
</script>

<style>
</style>

