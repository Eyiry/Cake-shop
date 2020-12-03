<template>
    <body>
    <v-app id="carrito">
        <header>
            <div class="container">
                <nav>
                    <ul>
                        <li><router-link to="/Catalogo">Cat&aacute;logo</router-link></li>
                        <li><router-link to="/Perfil">Perfil</router-link></li>
                        <li><router-link to="/CarritoCompra">Carrito</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <h1>Historial de compras</h1>

        <v-data-table
            :headers = "headers"
            :items = "info"
            class="elevation-1">

        <template slot="body.append">
            <tr>
                <th class="title">Totals</th>
                <th class="title"> --- </th>
                <th class="title"> --- </th>
                <th class="title"> {{ sumField('precio') }}</th>
            </tr>
        </template>
        </v-data-table>

    </v-app>
    </body>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import axios from 'axios'
Vue.use(VueCookies)

export default {
  name: 'CarritoCompra',
  data () {
    return {
      info: [],
      pk: null,
      headers: [
          {
              text: 'Producto',
              align: 'left',
              value: 'nombre' 
          },
          {
              text: 'Fecha',
              align: 'left',
              value: 'fecha'
          },
          {
              text: 'Cantidad',
              align: 'left',
              value: 'numarts'
          },
          {
              text: 'Precio',
              align: 'left',
              value: 'precio'
          }
      ]
    }
  },
  mounted () {
    const article = {
      'mail': this.$cookies.get('miUser')
    }

    axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/fkusuario', article)
                .then(response => (this.pk = response.data))
    const sale = {
      'fk': this.$cookies.get('mipk')
    }

    axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/traerhistorico', sale)
      .then(response => (this.info = response.data))

    console.log(this.info)
  },
  methods: {
    sumField(key) {
        // sum data in give key (property)
        return this.info.reduce((a, b) => a + (b[key] || 0), 0)
    }
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

</style>
