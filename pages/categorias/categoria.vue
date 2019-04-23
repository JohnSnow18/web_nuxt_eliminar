<template>
  <div>
    <h1 style="margin-left: 35%">Listado de categorias</h1>

    <div style="row mt-2">
      <div style="col-sm-12">
        <b-table id= "categorias" striped hover :fields="fields" :items="items" :current-page="currentPage" :per-page="perPage">

          <template slot="acciones" slot-scope="data">
            <b-button variant="success">
              Editar
            </b-button>

              <b-button variant="danger" type="button" @click="eliminarCategoria(data.item.id, data.index)">
              Eliminar
            </b-button>
           
          </template>
        </b-table>

      <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="categorias"
    ></b-pagination>
      </div>
    </div>
    <!-- :items="items" -->
    <div style="margin-left:42%">
      <br>
      <br>
      <b-button href="../categorias/admincat" type="button" class="btn btn-success">Nueva categoria</b-button>
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
    return db.collection('categorias')/* .orderBy('nombre') *//* .limit(perPage) */.get().then(async res =>{
      let items = []
     console.log(res)
    /res.forEach(value =>{
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
  
        {
          key: "nombre",
          sortable: true
        },
        {
          key: "tipo",
          sortable: true,
        },

        {
          key: "acciones",
          sortable: false
        }

      ]
    };
  },
  methods:{
eliminarCategoria(id, index){
  db.collection("categorias").doc(id).delete().then(res=>{
    this.items.splice(index,1)
     alert("como es que no pude :c")
  })
}
  }
};
</script>

<style>
</style>

 
