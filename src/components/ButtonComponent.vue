<template>
  <button v-if="fullBtn" class="full-btn">
    {{msg}}
  </button>
  <button v-else class="outline-btn">{{ msg  }}</button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    msg: String,
  },
  methods: {
    fullBtn: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button {
  padding: 12px;
  border: none;
  border-radius: 8px;
  color: #42b983;
  background-color: #2c3e50;
  text-transform: capitalize;
  font-size: 0.9em;
}
button:hover {
  cursor: pointer;
}

.outline-btn {
  border: 1px solid var(--light-green);
  background-color: white;
  color: var(--light-green);
  padding: 10px;
}

.full-btn {
  background-color: var(--light-green);
  color: white;
}

</style>
