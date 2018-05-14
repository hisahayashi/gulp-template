<template>
  <div class="component-inner">
    <h2>Vue Single File Component</h2>
    <p>
      <input type="number" v-model="count" placeholder="edit me">
      <button @click="countDown">Count Down</button>
      <button @click="countUp">Count Up</button>
    </p>
    <p>{{ msg }}</p>
    <p><input v-model="msg"></p>
  </div>
</template>

<script>
let Component = {

  data() {
    return {
      msg: 'Default. ',
      count: 0,
    }
  },

  created() {
    this.msg = 'Created. '
    this.count = 0
  },

  methods: {
    countUp(){
      this.count++
    },
    countDown(){
      this.count--
    }
  }
}
export default Component
</script>
