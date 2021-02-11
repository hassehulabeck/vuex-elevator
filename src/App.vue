<template>
  <div id="app">
    <elevator-shaft />
    <section>
      <floor
        class="floor"
        v-for="(floor, index) in elevatorshaft.slice().reverse()"
        :floor="floor"
        :index="3 - index"
        :key="index"
      />
      <!-- Notera .slice().reverse() för att ändra ordningen på arrayen. -->
      <!-- OBS. Rad 9 är en omräkning av index pga att jag vänder på arrayen på rad 7 -->
      <!-- Siffran 3 motsvarar fyra element i arrayen elevatorshaft -->
    </section>
  </div>
</template>

<script>
import ElevatorShaft from "./components/ElevatorShaft.vue";
import Floor from "./components/Floor.vue";
export default {
  name: "App",
  components: { ElevatorShaft, Floor },
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
        let slump = Math.floor(Math.random(0, 1) * 10);
        // Siffran 10 pga antalet produkter i en hårdkodad jsonfil.
        this.$store.dispatch("getProducts", slump);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  box-sizing: border-box;
}
section {
  display: flex;
  flex-direction: column;
}
</style>
