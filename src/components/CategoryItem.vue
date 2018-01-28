<template>
    <li>
        <span class="asile-num">{{category.aisleName}}</span>
        <span class="category-name">{{category.categoryName}}</span>
        <addToCart :category="category" />
    </li>
</template>

<script>
import AddToCart from './AddToCart';

export default {
    props:['category'],
    components:{
        AddToCart
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
            margin: 0 auto 0 0;
        }
    }
  }
</style>