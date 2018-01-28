<template>
  <div id="app">
    <shoppingList />
    <categoryList />
  </div>
</template>

<script>
import CategoryList from  './components/CategoryList';
import ShoppingList from './components/ShoppingList';

export default {
  components: {
    CategoryList,
    ShoppingList
  }
}
</script>

<style lang="scss" scoped>
  #app{
    padding: 30px;
  }
</style>
