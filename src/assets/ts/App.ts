// import $ from 'jquery'
import Vue from 'vue'
import VueRouter from './routes/routes'

class App {

  private className = 'App.ts'

  /**
   * [constructor description]
   */
  constructor() {
    console.log(this.className, 'constructor()')
    // console.log('body length', $('body').length)

    new Vue({
      el: '#app',
      router: VueRouter
    })
  }

  /**
   * [hello description]
   */
  hello(){
    console.log(this.className, 'hello()')
    // console.log('Hello! Node.js × TypeScript from Class')
  }
}

const app = new App()
app.hello()
