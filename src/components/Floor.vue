<template>
  <div>
    {{ this.floor }}
    <button @click="come(floor)">Hit</button>
  </div>
</template>

<script>
export default {
  name: "Floor",
  props: {
    floor: String,
  },
  computed: {
    elevatorshaft() {
      return this.$store.state.elevatorshaft;
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
</style>
