<template>
  <div :class="{ isHere: isHere }">
    {{ floor }}
    <button @click="come(index)">Hit</button>
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
    index: Number,
  },
  computed: {
    currentFloor() {
      return this.$store.state.currentFloor;
    },
  },
  methods: {
    come(idx) {
      this.$store.commit("goto", idx);
    },
  },
  watch: {
    currentFloor(newValue) {
      if (newValue == this.index) {
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
  box-sizing: border-box;
}
.isHere {
  background: rosybrown;
}
</style>
