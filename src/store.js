import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, 
        name: 'Sprallig Sol Tröja', 
        image: require('./assets/img/Shirt_solen.jpg'), 
        price: 299 },
      { invId: 2, 
        name: 'Sprallig Regn Tröja', 
        image: require('./assets/img/Shirt_regnet.jpg'), 
        price: 299 },
      { invId: 3, 
        name: 'Sprallig Vind Tröja', 
        image: require('./assets/img/Tshirt_vind.jpg'), 
        price: 299 },
      { invId: 4, 
        name: 'Sprallig Snö Tröja', 
        image: require('./assets/img/Tshirt_snön.jpg'),  
        price: 299 },
        { invId: 5, 
          name: 'Sprallig Sol Body', 
          image: require('./assets/img/Body_sol.jpg'),  
          price: 299 },
          { invId: 6, 
            name: 'Sprallig Regn Body', 
            image: require('./assets/img/Body_regn.jpg'),  
            price: 299 },
            { invId: 7, 
              name: 'Sprallig Vind Body', 
              image: require('./assets/img/Body_vind.jpg'),  
              price: 299 },
              { invId: 8, 
                name: 'Sprallig Snö Body', 
                image: require('./assets/img/Body_snö.jpg'),  
                price: 299 },
    ],
    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
  },
});
