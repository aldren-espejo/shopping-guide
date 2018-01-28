import './firebase';
import Vue from 'vue';
import App from './App.vue';
import VueFire from 'vuefire';

// window.cartItems = [];
// if (typeof(localStorage.cartItems) !== 'undefined'){
//   cartItems = JSON.parse(localStorage.cartItems);
// }


// use vuefire plugin
Vue.use(VueFire);

// create a bus for basic state management
Vue.prototype.$bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
