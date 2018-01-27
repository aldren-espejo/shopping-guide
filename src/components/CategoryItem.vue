<template>
    <li>
        <span class="asile-num">{{catItem.aisleName}}</span>
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

<style lang="scss" scoped>
  li{
    display: flex;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: 1px solid #dedede;
    border-bottom: none;

    &:last-child{
        border-bottom: 1px solid #dedede;
    }

    span{
        display: block;
        padding: 10px 20px;

        &.asile-num{
            background: #4233aa;
            color: #fff;
            font-size: 30px;
            width: 80px;
            text-align: center;
        }

        &.category-name{
            font-size: 24px;
        }
    }
  }
</style>