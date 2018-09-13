
import io from 'socket.io-client'

const socket = io.connect('https://bddi-2019-chat.herokuapp.com')

const api = {
  get connected () {
    return socket.connected
  },
  userRegister (username = '') {
    return new Promise((resolve, reject) => {
      socket.once('user registered', (user) => {
        // resolve
        resolve(user)
      })
      socket.once('error', (error) => {
        reject(error)
      })
      emitProxy('user register', {
        username
      })
    })
  },
  // Methods
  messageSend (message = '') {
    emitProxy('message new', message)
  },
  commandSend (command, value = '') {
    this.messageSend(`/${command} ${value}`)
  },
  // Events
  onMessage (cb) {
    socket.on('message new', cb)
  },
  onUserUpdate (cb) {
    socket.on('users update', cb)
  },
  onError (cb) {
    socket.on('chat error', cb)
  }

}

function emitProxy (event, ...args) {
  if (socket.connected) {
    socket.emit(event, ...args)
  } else {
    console.log('Socket disconnected, wainting for connection')
    socket.on('conect', () => {
      console.log('Socket reconnected. Emmitting')
      socket.emit(event, ...args)
    })
  }
}

export default {
  install (Vue, options) {
    Vue.$api = api
    Vue.prototype.$api = Vue.$api = api
  }
}
