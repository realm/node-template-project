import * as superagent from 'superagent'
import Context from './context'

export default function use(host: string) {
  Context.getInstance().host = host
}