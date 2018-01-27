<template>
  <div id="app">
    <categoryList />
  </div>
</template>

<script>
import CategoryList from  './components/CategoryList';

export default {
  components: {
    CategoryList,
  }
}
</script>

<style lang="scss" scoped>
  #app{
    padding: 30px;
  }
</style>
