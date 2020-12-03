<template>
    <body>
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

      <div class="wrapper">
            <div id="formMark">
                <div class="title">Crea tu Cuenta</div>
                <div><h2>Nombre</h2></div>
                <span>{{info.nombre}}</span>
                <button v-on:click ="change('nombre')" id="nombreBtn"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg"></button>
                <div><h2>Apellido Paterno</h2></div>
                <span>{{info.apellidoP}}</span>
                <button v-on:click ="change('apellidoP')" id="apellidoPBtn"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg"></button>
                <div><h2>Apellido Materno</h2></div>
                <span>{{info.apellidoM}}</span>
                <button v-on:click ="change('apellidoM')" id="apellidoMBtn"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg"></button>
                <div><h2>Teléfono</h2></div>
                <span>{{info.telefono}}</span>
                <button v-on:click ="change('telefono')" id="telefonoBtn"><img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg"></button>
                <div><h2>Fecha de nacimiento</h2></div>
                <span class="displayInfo">{{info.Fnac}}</span>
                <div><h2>Mail</h2></div>
                <span class="displayInfo">{{info.username}}</span>
                <router-link to="/PassReco">Olvidaste tu contraseña?</router-link>
                <div><button v-on:click = "cerrar">Cerrar sesión</button></div>
                
            </div>
        </div>

        <a href="https://creativecommons.org/licenses/by/3.0/us/deed.en" title="Creative Commons Attribution 3.0 us">CC BY 3.0 us</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=49665075">Enlace</a>
  </body>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import axios from 'axios'
Vue.use(VueCookies)

export default {
  name: 'Perfil',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    const article = {
      'mail': this.$cookies.get('miUser')
    }

    axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/traercuenta', article)
      .then(response => (this.info = response.data))

    console.log(this.info)
  },
  methods: {
    change: function (attribute) {
      var modi = prompt('Escriba su nuevo valor', '')
      if (modi != null) {
        const article = {
          'mail': this.$cookies.get('miUser'),
          'str': attribute,
          'value': modi
        }

        axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/cambiarinfo', article)
          .then(response => {
            console.log(response)
            this.$router.go()
          })
      } else {
        alert('No se puede dejar el campo vacio')
      }
    }, 
    cerrar: function () {
      this.$cookies.remove('misitio_jwt')
      this.$cookies.remove('miUser')
      this.$router.push('home')
    }
  }
}
</script>

<style scoped>
@font-face {
    font-family: 'RockoFLF';
    src: url('http://www.fontsaddict.com/fontface/rockoflf.ttf');
  }

body{
  background-color: #A0DDE0;
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}

.container{
    width: 90%;
    margin: 0 auto;
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
    padding: 0px;
    list-style: none;
}

nav li{
    display: inline-block;
    margin-left: 30px;
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

.title {
  width: 100%;
  float: left;
  font-size: 36px;
  font-weight: 700;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #ED2553;
  position: relative;
}

.wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 80%;
    padding: 20px;
  }

  #formMark {
    background: #FFFEFE;
    padding: 25px;
    width: 80%;
    border-radius: 10px 10px 10px 10px;
    max-width: 450px;
    position: relative;
  }

  h2{
    float: left;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 28px;
    text-align: left;
    margin-top: 24px;
    margin-bottom: 16px;
    margin-right: 280px;
    white-space: pre;
  }

  span{
    margin: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 24px;
    text-align: left;
    margin-top: 24px;
    margin-bottom: 16px;
    margin-right: auto;
    display: inline-block;
    border: thin red solid;
    width: 90%;
    vertical-align: middle;
  }

  .displayInfo{
    margin: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 24px;
    text-align: left;
    margin-top: 24px;
    margin-bottom: 16px;
    margin-right: auto;
    display: inline-block;
    border: thin red solid;
    width: 100%;
    vertical-align: middle;
  }

  button{
    display: inline-block;
    vertical-align: middle;
    padding: 0;
    margin: 0;
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
  }

  select{
    width: 100%;
    border-radius: 4px;
    font-size: 18px;
    padding: 10px 18px;
    margin: 16px 0;
  }

  img{
      height: 30px;
      width: 30px;
      display: block;
  }

  .error {
    color: red;
    font-size: 20px;
  }

  .bienvenida {
    color: black;
    font-size: 24px;
    font-weight: bold;
  }

  a:link{
    color: grey;
  }
  a:visited{
    color: grey;
  }

  a:hover{
    color: black
  }

  a {
    font-size: 18px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin: 16px 0;
  }

</style>
