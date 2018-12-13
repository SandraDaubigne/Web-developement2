<
<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
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
