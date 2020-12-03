<template>
    <body >
        <div class="wrapper">
            <div id="formMark">
                <div class="title">Crea tu Cuenta</div>
                <form>
                    <label for="fgenero">G&eacute;nero</label>
                    <select id="fgenero" name="genero" ref="genero">
                        <option value=""></option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>

                    <label for="fnombre">Nombre</label>
                    <input type="text" id="fnombre" name="fnombre" ref="nombre">
                    <label for="fpaterno">Apellido Paterno</label>
                    <input type="text" id="fpaterno" name="fpaterno" ref="paterno">
                    <label for="fmaterno">Apellido Materno</label>
                    <input type="text" id="fmaterno" name="fmaterno" ref="materno">
                    <label for="ftel">Tel&eacute;fono</label>
                    <input type="number" id="ftel" name="ftel" ref="tel">
                    <label for="fmail">Mail</label>
                    <input type="text" id="fmail" name="fmail" ref="user">
                    <label for="fnac">Fecha de Nacimiento</label>
                    <input type="text" id="fnac" name="fnac" ref="nac">
                    <label for="fpass">Contraseña</label>
                    <input type="password" id="fpass" name="fpass" ref="pwd">
                    <input type="submit" value="Crear Cuenta" v-on:click ="create" id="bot" name="bot">
                    <br>
                    <a href="/#/index.html"><img src="../assets/Home.png"></a>
                </form>
            </div>
        </div>
    </body>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CrearCuenta',
  data () {
    return {
      msg: '',

      posts: [],
      errors: []
    }
  },
  methods: {
    checkMail: function (mail) {
      var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
      if (mail.match(mailformat)) {
        return true
      } else {
        alert('Dirección de correo no válida!')
        return false
      }
    },
    create: function (event) {
      console.log(event)
      let user = this.$refs.user.value
      let pwd = this.$refs.pwd.value
      let gen = this.$refs.genero.value
      let name = this.$refs.nombre.value
      let pat = this.$refs.paterno.value
      let mat = this.$refs.materno.value
      let tel = this.$refs.tel.value
      let nac = this.$refs.nac.value

      const article = { 'username': user,
        'password': pwd,
        'nombre': name,
        'apellidoP': pat,
        'apellidoM': mat,
        'telefono': tel,
        'Fnac': nac,
        'genero': gen}

      if (this.checkMail(article.username) === true) {
        axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/creacuentaA01375332', article).then(response => {
          alert(response.data.result)
          if (response.data.result == 'success') {
            alert('cuenta creada con exito')
            this.$router.push('home')
          } else {
            alert('error al crear cuenta')
          }
        })
          .catch(e => {
            this.errors.push(e)
          })
      } else {
        alert('Dirección de correo no válida!')
      }
    }}
}
</script>

<style scoped>
@font-face {
    font-family: 'RockoFLF';
    src: url('http://www.fontsaddict.com/fontface/rockoflf.ttf');
  }

body{
  background-color: #A0DDE0;
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
    max-width: 350px;
    position: relative;
  }

  input[type=text] {
      width: 90%;
      border-radius: 4px;
      font-size: 18px;
      display: flex;
      padding: 10px 18px;
      margin: 16px 0;
      border: thin black solid;
  }

  input[type=password]{
    width: 90%;
      border-radius: 4px;
      font-size: 18px;
      display: flex;
      padding: 10px 18px;
      margin: 16px 0;
      border: thin black solid;
  }

  input[type=number]{
    width: 90%;
    border-radius: 4px;
    font-size: 18px;
    padding: 10px 18px;
    margin: 16px 0;
    border: thin black solid;
  }

  input[type=submit]{
      text-align: center;
      justify-content: center;
      width: 50%;
      height: 50px;
      background-color: #3FA298;
      margin: 16px 0;
      border: none;
      border-radius: 5px;
      color: white;
      font-size: 16px;
      display: block;
      margin-left: auto;
      margin-right: auto;
  }

  select{
    width: 100%;
    border-radius: 4px;
    font-size: 18px;
    padding: 10px 18px;
    margin: 16px 0;
  }

  img{
      height: auto;
      width: 20%;
      margin: 16px;
      display: block;
      margin-left: auto;
      margin-right: auto;
  }

  label{
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 24px;
      text-align: left;
      margin-top: 24px;
      float: left;
      margin-bottom: 16px;
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
