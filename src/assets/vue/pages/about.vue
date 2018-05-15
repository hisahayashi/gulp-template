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

    <section id="api-component" class="cont">
      <ul>
        <li v-for="item in results" :key="item.url">
          <p><b>{{ item.title }}</b></p>
          <p><small>{{ item.description }}</small></p>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import Axios from 'axios'
import PageTitle from '../components/PageTitle.vue'

let Component = {

  data() {
    return {
      results: [{
        title: '',
        description: ''
      }]
    }
  },

  components: {
    PageTitle
  },

  created() {
    Axios.get('assets/json/index.json')
    .then((response) => {
      console.log(response.data)
      this.results = response.data
      this.$forceUpdate()
    }).catch(error => {
        console.log('error:', error)
    })
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
