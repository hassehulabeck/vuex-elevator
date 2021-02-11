<template>
  <div>
    <section>Aktuell våning: {{ elevatorshaft[currentFloor] }}</section>
    <button v-for="(floor, index) in elevatorshaft" :key="index" @click="comeHere(index)">
      {{ floor }}
    </button>
    <section v-if="isFloorNumber">Vi är högt uppe</section>
    <article v-if="product">
      {{ product.name }} (Nu endast {{ product.consumerPrice }})
    </article>
  </div>
</template>

<script>
export default {
  name: "ElevatorShaft",
  computed: {
    currentFloor() {
      return this.$store.state.currentFloor;
    },
    elevatorshaft() {
      return this.$store.state.elevatorshaft;
    },
    product() {
      return this.$store.state.product;
    },
    isFloorNumber() {
      return this.$store.getters.isFloorNumber;
    },
  },
  methods: {
    comeHere(floor) {
      this.$store.commit("goto", floor);
    },
  },
};
</script>

<style scoped>
div {
  margin: 0;
  width: 30vw;
  height: 80vh;
  border: 2px solid black;
  position: relative;
}
button {
  margin: 1em 0.2em;
}
article {
  position: absolute;
  bottom: 0;
  padding: 0.25;
  background: rebeccapurple;
  color: white;
  font-weight: 700;
  width: 100%;
  margin: 0 auto;
}
</style>
