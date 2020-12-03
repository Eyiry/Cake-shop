import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import MemberHome from '@/components/MemberHome'
import Catalogo from '@/components/Catalogo'
import CrearCuenta from '@/components/CrearCuenta'
import Perfil from '@/components/Perfil'
import CarritoCompra from '@/components/CarritoCompra'
import Historico from '@/components/Historico'
import PassReco from '@/components/PassReco'
import Search from '@/components/Search'

Vue.use(VueRouter)

const routes = [
  /*{
    path: '/',
    name: 'Home',
    component: Home
  },*/
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home

  },
  {
    path: '/Login',
    name: 'Login',
    component: Login

  },
  {
    path: '/Logged',
    name: 'MemberHome',
    component: MemberHome

  },
  {
    path: '/Catalogo',
    name: 'Catalogo',
    component: Catalogo
  },
  {
    path: '/CrearCuenta',
    name: 'CrearCuenta',
    component: CrearCuenta
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: Perfil
  },
  {
    path: '/CarritoCompra',
    name: 'CarritoCompra',
    component: CarritoCompra
  },
  {
    path: '/Historico',
    name: 'Historico',
    component: Historico
  },
  {
    path: '/PassReco',
    name: 'PassReco',
    component: PassReco
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
