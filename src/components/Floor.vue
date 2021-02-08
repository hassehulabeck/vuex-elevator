<template>
  <div :class="{ isHere: isHere }">
    {{ this.floor }}
    <button @click="come(floor)">Hit</button>
  </div>
</template>

<script>
export default {
  name: "Floor",
  data() {
    return {
      isHere: false,
    };
  },
  props: {
    floor: String,
  },
  computed: {
    elevatorshaft() {
      return this.$store.state.elevatorshaft;
    },
    currentFloor() {
      return this.$store.state.currentFloor;
    },
  },
  methods: {
    come(floor) {
      let idx = this.elevatorshaft.findIndex((f) => {
        return f == floor;
      });
      this.$store.commit("goto", idx);
    },
  },
  watch: {
    currentFloor(newValue) {
      let idx = this.elevatorshaft.findIndex((f) => {
        return f == this.floor;
      });
      if (newValue == idx) {
        this.isHere = true;
      } else {
        this.isHere = false;
      }
    },
  },
};
</script>

<style scoped>
div {
  margin: 1em;
  background: wheat;
  border-radius: 2em;
  padding: 1em;
  min-height: 10vh;
  flex: 0 1 auto;
}
.isHere {
  border: 2px solid red;
}
</style>
