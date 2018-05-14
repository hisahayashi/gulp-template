<template>
  <div>

    <div id="page-title">
      <page-title ref="pageTitle"/>
    </div>

    <section id="link-component" class="cont">
      <div>
        <router-link to="/">Go to Top</router-link>
      </div>
    </section>

  </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

let Component = {

  data() {
    return {
    }
  },

  components: {
    PageTitle
  },

  created() {
  },

  mounted() {
    // Call to Methods
    this.$refs.pageTitle.changeTitle('About')
    this.$refs.pageTitle.changeSubTitle('Hello About Page.')
  },

  computed: {
  },

  methods: {
  }
}
export default Component
</script>
