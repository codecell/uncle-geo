import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let uncleGeo = null;

//wait for firebase auth to init before creating app

firebase.auth().onAuthStateChanged(() => {
  //init appp if not already created
  uncleGeo = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')

}) 


