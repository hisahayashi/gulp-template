<template>
  <div>

    <div id="page-title">
      <page-title ref="pageTitle"/>
    </div>

    <section 
      id="link-component" 
      class="cont">
      <div>
        <router-link to="/about">Go to about</router-link>
      </div>
    </section>

    <div id="icon-font-preview">
      <icon-font-preview/>
    </div>

    <section 
      id="vue-container" 
      class="cont">
      <my-component ref="myComponent"/>
    </section>

    <section 
      id="vue-single-container" 
      class="cont">
      <my-single-file-component ref="mySingleFileComponent"/>
    </section>

  </div>
</template>

<script>
// import $ from 'jquery'
import Vue from 'vue'
import PageTitle from '../components/PageTitle.vue'
import IconFontPreview from '../components/IconFontPreview.vue'
import MySingleFileComponent from '../components/MySingleFileComponent.vue'

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))

let MyComponent = Vue.component('my-component', {
  data () {
    return {
      message: 'Hello Custom Template'
    }
  },
  template: '<div><h2>Vue Component</h2><p>{{ message }}</p></div>'
})

let Component = {

  data() {
    return {
    }
  },

  components: {
    PageTitle,
    IconFontPreview,
    MyComponent,
    MySingleFileComponent
  },

  created() {
  },

  mounted() {
    // Call to Methods
    this.$refs.pageTitle.changeTitle('Top')
    this.$refs.pageTitle.changeSubTitle('Hello Top Page.')

    // Edit to Variables
    // this.$refs.pageTitle.title = 'Top (changed from variable)'
    // this.$refs.pageTitle.subTitle = 'Hello Top Page. (changed from variable)'

    // Fade in MyComponent
    // $(this.$el).fadeOut(0)

    // Call to My Methods
    this.render()
  },

  computed: {
  },

  methods: {

    async render(){
      await sleep(500)
      // $(this.$el).fadeIn(500)
    }
  }
}
export default Component
</script>
