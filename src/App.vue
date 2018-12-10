<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="add_1">count + 1</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    add_1 () {
      this.count = this.count + 1
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
