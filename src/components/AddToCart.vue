<template>
  <button @click="addToCart">Add to Cart</button>
</template>

<script>

export default {
  props:['category'],
  methods:{
      addToCart(){
        const item = {
          name: this.category.categoryName,
          num: this.category.aisleName
        }
        this.$bus.$emit('addItem', item);
      }
  }
}
</script>
