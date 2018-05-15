import Axios from 'axios'

declare global {
  interface Window { env: any; }
}
window.env = window.env || {};


class API {

  private className = 'API.ts'
  private API_ROOT = window.env.path.endpoint

  /**
   * [constructor description]
   */
  constructor() {
    console.log(this.className, 'constructor()')
    console.log(this.className, 'API_ROOT', this.API_ROOT)
  }

  getAPI(path: string) {
    return Axios.get(this.API_ROOT + path)
    .then((res) => {
      console.log(res)
    });
  }
}

export default API