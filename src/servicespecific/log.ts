import * as superagent from 'superagent'
import Context from '../context'

import * as client from 'socket.io-client'

export function watchLog(host: string, service: string = 'all', toFilePath: string = null) {
  var socket = client.connect(`${host}/controls/`)
  socket.on('log', (payload: any) => {
      console.log(payload)
      if(toFilePath){
          //implement code to write file path
      }
  })
}