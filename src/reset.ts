import * as superagent from 'superagent'
import Context from './Context'

export default function reset(host: string = Context.getInstance().host) {
  superagent.post(`${host}/controls/reset`)
    .end((err, response) => {
      if (err) { console.error(err) }
      else {
        console.log(`sucessfully restarted the service`)
      }
    })
}