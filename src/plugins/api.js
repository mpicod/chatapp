
import io from 'socket.io-client'

const socket = io.conect('https://...')

const api = {
  get connected () {
    return socket.connected
  },
  userRegister (username) {
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
  messageSend (message = '') {
    emitProxy('message new', message)
  },
  commandSed (command, value = '') {
    this.messageSend(`/${command} ${value}`)
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
