<
<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top">
      <div class="card-body">
        <h1 class="card-title">{{ name }}</h1>
        <div class="card-text">{{ price }} kr</div>
        <div class="row justify-content-end">
         <button class="btn btn-primary" @click="addToCart(invId)">Lägg i varukorgen</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'item',
  props: ['invId', 'name', 'image', 'price'],
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
  },
};
</script>

<style lang="scss"scoped>
.card{
  box-shadow: 20px 20px 10px grey;
    margin-bottom: 30px;
}
  h1{
      font-size: 1.5vw;
    }
    .card-title{
      font-family: ink free;
      
    }

</style>
