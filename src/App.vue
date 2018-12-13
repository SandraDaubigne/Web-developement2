<template>
  <div id="app" class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>Sprallig Webshop</h1>
        <p>Kläder för alla väder</p>

      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>
    <div class="row">
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />
    </div>

  </div>
</template>
<script>
import Item from './Item.vue';
import ShoppingCart from './ShoppingCart.vue';
export default {
  name: 'app',
  computed: {
    forSale() { return this.$store.getters.forSale; },
  },
  components: {
    Item,
    ShoppingCart,
  },
};
</script>
<style>
  body{
    background-image: linear-gradient(to right bottom,rgba(168, 219, 207, 0.76)),url('./assets/img/lov.stor.jpg');

  }

  h1{
    font-family: ink free;
    font-size: 5vw;
    text-align: center;
    color: black; 
  }

  p{
   font-family: ink free;
    font-size: 3vw;
    text-align: center;
    color: black; 
  }

  .card{
    margin-bottom: 30px;
  }


</style>
