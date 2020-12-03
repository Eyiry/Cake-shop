<template>
    <body>
        <header>
            <div class="container">
                <nav>
                    <ul>
                        <li><router-link to="/Search">Buscar</router-link></li>
                        <li><router-link to="/Perfil">Perfil</router-link></li>
                        <li><router-link to="/CarritoCompra">Carrito</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <div class="centerImg">
            <div class="Title">
              <h1>Catalogo</h1>
            </div>
          </div>

        <h2 id="TituloProductos">Nuestros productos</h2>

        
        <div class="row">
            <div class="column" v-for="cake in cakes" :key="cake.a01375332_nomb_productos">
                <Cake :cake="cake" />
            </div>
        </div>

    </body>
</template>

<script>
import Cake from '@/components/Cake.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueCookies from 'vue-cookies'
import axios from 'axios'
Vue.use(VueCookies)
Vue.use(Vuetify)

export default {
  name: 'Catalogo',
  components: {
    Cake
  },
  data () {
    return {
      cakes: []
    }
  },
  mounted () {
    const article = {}
    axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/traercatalogo', article)
      .then(response => (this.cakes = response.data))
  }
}
</script>

<style scoped>
@font-face {
    font-family: 'RockoFLF';
    src: url('http://www.fontsaddict.com/fontface/rockoflf.ttf');
  }

body, html{
    background-color:FFFEFE;
    margin: 0;
    padding: 0;
    height: 100%;
}

header{
    background-color: #A4C1D4;
}

header::after{
    content: "";
    display: table;
    clear: both;
}

nav{
    float: right;
    border: 0px;
}

nav ul{
    margin: 0;
    padding: 10px;
    list-style: none;
}

nav li{
    display: inline-block;
    margin-left: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 18px;
    font-family: 'Open Sans', sans-serif;
}

nav a:hover{
    color: black;
}

.centerImg {
    position: relative;
    background-size: cover;
    height: 400px;
    background-position: center;
    background-image: url("../assets/cupcakes.jpg");
}

.Title{
    position: absolute;
    text-align: center;
    color: white;
    font-weight: 600;
    font-family: 'RockoFLF';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: large;
}

.subtitle {
    text-align: center;
    font-weight: bold;
    font-family: 'RockoFLF';
    text-align: center;
    font-size: 36px;

}

/*Preguntar Como hacer para que los margenes queden iguales*/
.row {
    margin: 30px 10px;
}

/*No mover esto quita el margen del abajo*/
.row:after {
    content: "";
    display: table;
    clear: both;
}

.column{
    float: left;
    width: 33%;
    padding: 0 10px;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: f1f1f1;
}

.product-table{
    margin: 20px 0;
    min-width:40%;
    height: auto;
    border-collapse: collapse;
    border: 5px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
}

.product-table thead tr{
    background-color:A0DDE0;
    text-align: left;
    font-weight: bold;
}

.product-table td, .product-table th{
    padding: 12px 15px;
    font-size: 24px;
}

.product-table tbody tr {
    border-bottom: 1px solid ;
}

#TituloProductos{
    color: A4C1D4;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 48px;
}

#Cuentas{
    color: A4C1D4;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    font-size: 36px;
}

.imgCard{
    width: 100%;
    height: 500px;
}

.center{
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

.loginButton{
        background-color: #A0DDE0;
        border: none;
        color: white;
        border-radius: 5px;
        padding: 25px 48px;
        text-align: center;
        text-decoration: none;
        font-size: 28px;
        margin: 16px 5px;
        cursor: pointer;
        float: left;
}

.createButton{
    background-color: #ffb7c5;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 25px 48px;
    text-align: center;
    text-decoration: none;
    font-size: 28px;
    margin: 16px 5px;
    cursor: pointer;
    float: left;
}
</style>
