import accounts from './api/Accounts'
import check_username from './api/CheckUsername'
import subscribers_count from './api/SubscribersCount'
import yo from './api/Yo'
import yo_all from './api/YoAll'

class JustYo {

  constructor (apiToken) {
    this.url = 'https://api.justyo.co/'
    this.apiToken = apiToken
    this.addEndpoints({
      accounts,
      check_username,
      subscribers_count,
      yo,
      yo_all
    })
  }

  addEndpoints (endpoints) {
    for (let name in endpoints) {
      this[name] = new endpoints[name](this)
    }
  }

}

export default JustYo
