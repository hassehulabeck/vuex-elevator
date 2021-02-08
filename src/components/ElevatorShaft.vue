<template>
  <div>
    <section>Aktuell våning: {{ elevatorshaft[currentFloor] }}</section>
    <button v-for="(floor, index) in elevatorshaft" :key="index" @click="comeHere(index)">
      {{ floor }}
    </button>
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
  },
  watch: {
    currentFloor(newValue) {
      if (newValue == 0) {
        this.$store.dispatch("getProducts");
      }
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
}
button {
  margin: 1em 0.2em;
}
</style>
