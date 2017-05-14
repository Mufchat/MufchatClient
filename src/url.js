/**
 * Created by ggere on 08.05.2017.
 */
export class Url {
  static get API_URL () {
    return 'http://localhost:9000/'
  }
  static get LOGIN_URL () {
    return this.API_URL + 'login'
  }
}
