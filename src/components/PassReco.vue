<template>
    <body>
    <v-app id="carrito">
        <header>
            <div class="container">
                <nav>
                    <ul>
                        <li><router-link to="/Catalogo">Cat&aacute;logo</router-link></li>
                        <li><router-link to="/Perfil">Perfil</router-link></li>
                        <li><router-link to="/Historico">Historico</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>

        <h1>Recuperar Contraseña</h1>

        <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="pass"
        type="password"
        label="Nueva Contraseña"
        required
      ></v-text-field>
  
      <v-btn
        color="success"
        @click="change"
      >
        Cambiar Contraseña
      </v-btn>
  
      <v-btn
        color="error"
        @click="reset"
      >
        Reset Form
      </v-btn>
    </v-form>
    </v-app>
    </body>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import axios from 'axios'
Vue.use(VueCookies)

export default {
  name: 'PassReco',
  data () {
    return {
      pass : ''
    }
  },
  methods: {
    reset () {
      this.$refs.form.reset()
    },
    change () {
        const article = {
          'mail': this.$cookies.get('miUser'),
          'str': 'password',
          'value': this.pass
        }

        axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/cambiarinfo', article)
          .then(response => {
            console.log(response)
            this.$router.go()
          })
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
