<template>
    <div class="categories">
      <searchbox @input="search" />
      <ul class="lst-categories">
          <categoryItem v-for="category in filtered" :category="category" :key="category['.key']"  />
      </ul>
    </div>
</template>

<script>
// import sub component
import CategoryItem from './CategoryItem';
import Searchbox from './Searchbox';

// import category list
import {categoriesRef} from '../firebase';

export default {
  data(){
    return{
      keyword: '',
    }
  },
  firebase:{
    categories: categoriesRef
  },
  components: {
    CategoryItem,
    Searchbox
  },
  methods:{
    search(userInput){
      this.keyword = userInput;
    }
  },
  computed: {
    filtered(){
      return this.categories.filter(category => {
        return category.categoryName.toLowerCase().includes(this.keyword.toLowerCase())
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .categories{
    ul{
      list-style: none;
    }
  }
</style>