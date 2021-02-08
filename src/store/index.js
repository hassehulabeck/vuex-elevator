import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elevatorshaft: [
      'Källaren',
      'Entreplan',
      '1',
      '2'
    ],
    currentFloor: 1,
    products: null
  },
  mutations: {
    goto (state, call) {
      state.currentFloor = call
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    }
  },
  actions: {
    getProducts({commit}) {
      axios.get('https://www.hulabeck.se/html/temp/products.json')
        .then(response => {
          commit('SET_PRODUCTS', response.data.products)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  modules: {
  }
})
