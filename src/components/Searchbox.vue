<template>
  <input type="text" @input="updateKeyword($event)" placeholder="Search here..." class="searchText">
</template>

<script>
export default {
    methods:{
        updateKeyword(event){
            this.$emit('input', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
    .searchText{
        width: 100%;
        font-size: 24px;
        padding: 5px 10px;
        margin: 0 0 20px;
        border: 1px solid #dedede;
    }
</style>