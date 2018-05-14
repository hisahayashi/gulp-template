<template>
<div>
  <section class="cont">
    <h1>{{title}}</h1>
    <p>{{subTitle}}</p>
  </section>
</div>
</template>

<script>
let Component = {

  data() {
    return {
      title: 'Enter a title',
      subTitle: 'Enter a subtitle',
    }
  },

  components: {
  },

  created() {
  },

  mounted() {
    this.title = 'Mounted a title'
    this.subTitle = 'Mounted a subtitle'
  },

  methods: {
    changeTitle(str){
      this.title = str
    },
    changeSubTitle(str){
      this.subTitle = str
    }
  }
}
export default Component
</script>
