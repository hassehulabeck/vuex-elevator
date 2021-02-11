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
      '2',
    ],
    currentFloor: 1,
    product: null
  },
  getters: {
    isFloorNumber(state) {
      if (state.currentFloor > 1) {
        return true;
      }
    }
  },
  mutations: {
    goto (state, call) {
      state.currentFloor = call
    },
    SET_PRODUCT(state, product) {
      state.product = product
    }
  },
  actions: {
    getProducts({commit}, slump) {
      axios.get('https://www.hulabeck.se/html/temp/products.json')
        .then(response => {
          commit('SET_PRODUCT', response.data.products[slump])
        })
        .catch((err) => {
          console.error(err)
        })
    }
  },
  modules: {
  },
  
})
