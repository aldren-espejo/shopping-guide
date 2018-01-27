<template>
    <li>
        <span class="asile-num">{{catItem.aisleNum}}</span>
        <span class="category-name">{{catItem.categoryName}}</span>
    </li>
</template>

<script>

export default {
  props:['category'],
  data(){
      return{
          catItem: this.category
      }
  }
}
</script>
