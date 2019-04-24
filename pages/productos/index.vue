<template>
  <div>
    <h1 style="margin-left: 35%">Listado de productos</h1>

    <div style="row mt-2">
      <div style="col-sm-12">
        <b-table id= "productos" striped hover :fields="fields" :items="items" :current-page="currentPage" :per-page="perPage">

          <template slot="acciones" slot-scope="data">
            <b-button variant="success" :href="`/productos/${data.item.id}`">
              Editar
            </b-button>

              <b-button variant="danger" type="button" @click="eliminarProducto(data.item.id, data.index)">
              Eliminar
            </b-button>
           
          </template>

          <template slot="imagen" slot-scope="data">
            <b-img width= "120" :src="data.item.image"></b-img>
          </template>
        </b-table>

      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="productos"
    ></b-pagination>
      </div>
    </div>
    <!-- :items="items" -->
    <div style="margin-left:42%">
      <br>
      <br>
      <b-button href="/productos/nuevo" type="button" class="btn btn-success">Nuevo producto</b-button>
    </div>
  </div>
</template>

<script>
import firebase, {db} from "../../services/firebase";
/* import { async } from 'q'; */

export default {
  asyncData() {
    // se ejecuta antes de cargar la pagina
    let perPage = 2
    return db.collection('productos')/* .orderBy('nombre') *//* .limit(perPage) */.get().then(async res =>{
      let items = []
     console.log(res)
    res.forEach(value =>{
       items.push({
        id: value.id,
        ...value.data()
       })

     }) 
  

/* let resTotal = await db.collection('productos').get()
     let ultimoItem = items[items.length -1] */
     console.log(items)
      return{
        items,
     /*    ultimoItem, */
        currentPage: 1,
        /* rows: resTotal.docs.length, */
        rows:res.docs.length,
        perPage
      }
    })
  },
  mounted(){
    console.log(this.items)
  },
  data() {
    return {
      fields: [
        
        {  key: "imagen",
           sortable: false
        },
        {
          key: "nombre",
          sortable: true
        },
        {
          key: "precio",
          sortable: true,
        },
        {
          key: "cantidad",
          sortable: true,
        },
        {
          key: "acciones",
          sortable: false
        }
        /*items:
           { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' } */
      ]
    };
  },
  methods:{
eliminarProducto(id){
  db.collection("productos").doc(id).delete().then(res=>{
    this.items.splice(index,1)
     alert("como es que no pude :c")
  })
}
  }
};
</script>

<style>
</style>

 
