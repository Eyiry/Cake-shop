<template>
  <body>
    <div class="wrapper">
            <div id="formMark">
                <form>
                    <div class="title">Login</div>
                    <label for="mail">Mail</label>
                    <input type="text" id="mail" name="mail" ref="mail">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" ref="pwd">
                    <input type="submit" value="Ingresar" v-on:click ="login" id="bot" name="bot"/>

                    <br>
                    <router-link to="/PassReco">¿Has olvidado tu contraseña?</router-link>
                    <router-link to="/CrearCuenta">¿Todavía no tienes una cuenta crea una aquí?</router-link>
                </form>
            </div>
        </div>
  </body>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export default {

  name: 'Login',
  data () {
    return {
      msg: '',

      posts: [],
      errors: []
    }
  },
  methods: {
    login: function (event) {
      console.log(event)
      let mail = this.$refs.mail.value
      const requestToken = {'username': mail}
      let tokenJWT = ''
      axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/jwt-token', requestToken)
        .then(response => {
          tokenJWT = response.data.token
          let pwd = this.$refs.pwd.value
          const article = { 'mail': mail,
            'password': pwd,
            'token': tokenJWT}
          axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/login', article)
            .then(response => {
              if (response.data.login == 'success') {
                this.$cookies.set('misitio_jwt', tokenJWT, '1d')
                this.$cookies.set('miUser', mail, '1d')
                console.log(this.$cookies.get('misitio_jwt') + ' soy la cookie')
                this.$router.push('Logged')
              } else {
                alert('error de login')
              }
            })
        })
        .catch(e => {
          this.errors.push(e)
        })
    }}
}
</script>

<style scoped>

  * {
        margin: 0;
    }

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
    min-height: 100%;
    padding: 40px;
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
    width: 100%;
    border-radius: 4px;
    font-size: 18px;
    padding: 10px 18px;
    margin: 16px 0;
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
