<template>
  <div class="main-categories">
    <h1>Main Categories</h1>
    <ul>
        <categoryItem v-for="category in categories" :category="category" :key="category['.key']"  />
    </ul>
  </div>
</template>

<script>
// import sub component
import CategoryItem from './CategoryItem';

// import category list
import {categoriesRef} from '../firebase';

export default {
  firebase:{
    categories: categoriesRef
  },
  components: {
    CategoryItem
  }
}
</script>
