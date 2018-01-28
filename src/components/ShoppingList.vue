<template>
  <ul>
     <li v-for="item in shoppingList" :key="item['.key']">
        <span class="num">{{item.num}}</span>
        <span class="name">{{item.name}}</span>
        <button @click="removeItem(item)">Remove</button>
     </li>
  </ul>
</template>

<script>

let itemToRemove = {};

export default {
  data(){
    return{
      shoppingList: JSON.parse(localStorage.cartItems),
      shopItem: null
    }
  },
  methods:{
    addItem(item){
      this.shoppingList.push(item);
      this.updateStorage();      
    },
    removeItem(item){
      this.shoppingList.splice(this.shoppingList.indexOf(item), 1);
      this.updateStorage();
    },
    updateStorage(){
      localStorage.cartItems = JSON.stringify(this.shoppingList);
    }
  },
  mounted(){
    const self = this;
    this.$bus.$on('addItem',function(item){
      self.addItem(item);
    })
  }
}
</script>
