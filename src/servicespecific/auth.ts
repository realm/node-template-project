import * as superagent from 'superagent'
import Context from '../context'

export function putUser(username: string, password: string, isAdmin: boolean = false) {
  superagent
    .post(`${Context.getInstance().host}/controls/auth/putUser`)
    .send({
        username: username,
        password: password,
        isAdmin: isAdmin
    })
    .end((err, response) => {
        if(err) { console.error(`Failed to create or update user.`, err) }
        else {
            let isNew: boolean = response.body.isNew // json of the the created user
            let user: any = response.body.user // json of the the created user
            if(isNew){
                console.log(`Successfully created the user`, user)
            }else{
                console.log(`Successfully updated the user`, user)
            }
            
        }
    })
}

export function removeUser(username: string) {
  superagent
    .delete(`${Context.getInstance().host}/controls/auth/users`)
    .send({
        username: username
    })
    .end((err, response) => {
        if(err) { console.error(`Failed to remove`, err) }
        else {
            let user: any = response.body.user
            console.log(`Successfully removed the user`, user)
        }
    })
}
