import $ = require('jquery');

class App {

  // Constructor
  constructor() {
    console.log($('body').length);
  }

  hello(){
    console.log('Hello! Node.js × TypeScript from Class');
  }
}

const app = new App();
app.hello();
