<template>
  <div>
    <button class="btn btn-primary" data-toggle="modal" data-target="#shoppingCart">Varukorg ({{ numInCart }})</button>
    <div id="shoppingCart" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Dina varor:</h5>
        <button class="close" data-dismiss="modal">
          &times;
        </button>
      </div>
      <div class="modal-body">
      <table class="table">
  <tbody>
    <tr 
    v-for="item in cart" :key="item.invId">
      <td :name="name">{{ item.name }}</td>
      <td :price="price">{{ item.price}}</td>
      <tr>
      <th>Totalt:</th>
      <th>{{ total }}</th>
    </tr>
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-dismiss="modal">Fortsätt handla</button>
        <button class="btn btn-primary">Beställ</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'shoppingCart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
 cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
};
</script>

