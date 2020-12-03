<template>
    <v-app id="inspire">
        <div class="card">
            <img class="imgCard" v-bind:src="cake.img" alt="Pastel de chocolate">
            <h2>{{cake.a01375332_nomb_productos}}</h2><hr>
            <span>{{cake.a01375332_producto_descripcion}}</span>
            <h3>${{cake.a01375332_productos_precio}}</h3>
            <v-dialog v-model="dialog" persistent max-width="350">
                <template v-slot:activator="{ on }">
                    <v-btn normal rounded color="primary" v-on="on">Comprar</v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">Gracias por su compra</v-card-title>
                    <v-card-text>Su compra de un {{cake.a01375332_nomb_productos}} ha sido realizada</v-card-text>
                    <v-card-actions>
                        <v-text-field
                            v-model="counter"
                            hide-details
                            single-line
                            type="number"
                            />
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat @click="compra()">Aceptar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </v-app>
</template>

<script>
import Vue from 'vue'
import VueCookies from 'vue-cookies'
import axios from 'axios'
Vue.use(VueCookies)
export default {
  name: 'cake',
  props: ['cake'],
  data () {
    return {
      dialog: false,
      pk: null,
      counter: 1
    }
  },
  mounted () {
    const article = {
      'mail': this.$cookies.get('miUser')
    }

    axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/fkusuario', article)
                .then(response => {
                    this.pk = response.data
                    this.$cookies.set('mipk', response.data, '1d')
                    })

    console.log(this.pk)
  },
  methods: {
      compra: function () {
          this.dialog = false
          const sale = {
              'cantidad': this.counter, 
              'usuario':this.pk,
              'numproduct': this.cake.a01375332_productos_pk
          }

          console.log(sale.usuario)
          console.log(sale.numproduct)

          axios.post('https://g14bvnl3z8.execute-api.us-east-1.amazonaws.com/default/metercarrito', sale)
            .then(response => {
                if (response.data.sale == 'success'){
                    console.log('venta exitosa')
                } else {
                    alert('lo sentimos hubo un error')
                }
            })
      }
  }
}
</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: f1f1f1;
}

.imgCard{
    width: 100%;
    height: 500px;
}

</style>
