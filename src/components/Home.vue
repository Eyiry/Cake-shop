<template>
<div>
<header>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/Catalogo">Cat&aacute;logo</router-link></li>
                <li><router-link to="/Login">Login</router-link></li>
                <li><router-link to="/CrearCuenta">Crear Cuenta</router-link></li>
            </ul>
        </nav>
    </div>
</header>

<div class="centerImg">
    <div class="Title">
        <h1>CAKE-SHOP</h1>
    </div>
</div>
<h2 id="TituloProductos">Productos Recomendados</h2>

<div class="row">
    <div class="column">
        <div class="card">
            <img class="imgCard" src="../assets/choco_cake.jpg" alt="Pastel de chocolate">
            <h2>Pastel de Chocolate</h2>
        </div>
    </div>
    <div class="column">
        <div class="card">
            <img class="imgCard" src="../assets/rasp_cake.jpg" alt="Pastel de zarzamoras">
            <h2>Pastel de Zarzamoras</h2>
        </div>
        </div>
        <div class="column">
            <div class="card">
                <img class="imgCard" src="../assets/blue_cake.jpg" alt="Pastel de Moras">
                <h2>Pastel de Moras</h2>
            </div>
        </div>
    </div>
    <h2 class="subtitle">Precios</h2>
    <table class="product-table">
        <thead>
            <tr>
                <th><b>Pastel</b></th>
                <th><b>Diametro</b></th>
                <th><b>Precio</b></th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Pastel de Chocolate</td>
                    <td>30 cm</td>
                    <td>$500</td>
                </tr>
                <tr>
                    <td>Pastel de Zarzamoras</td>
                    <td>20 cm</td>
                    <td>$350</td>
                </tr>
                <tr>
                    <td>Pastel de Moras</td>
                    <td>25 cm</td>
                    <td>$400</td>
                </tr>
            </tbody>
            </table>
            <br><br>
        <h2 id="Cuentas">¿Quieres comprar alguno de nuestros productos?</h2>

        <br><br>

        <div class="center">
            <a href="/#/Login" class="loginButton">Login</a>
            <a href="/#/CrearCuenta" class="createButton">Crear Cuenta</a>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export default {
  name: 'Home',
  data () {},
  created () {
    if (this.$cookies.isKey('misitio_jwt')) {
      this.$router.push('Logged')
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

.container{
    width: 80%;
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
    background-image: url("../assets/MediumCake.jpg");
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

.row {
    margin: 30px 10px;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.column{
    float: left;
    width: 31%;
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
    text-align: center;
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
