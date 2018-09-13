// import io from 'socket.io-client'

// const socket = io.conect('https://...')

const api = {
  userRegister (usrname) {

  },
  messageSend (message) {

  },
  commandSed (command, value) {
    this.messageSend(`/${command} ${value}`)
  }
}

export default {
  install (Vue, options) {
    Vue.$api = api
    Vue.prototype.$api = Vue.$api = api
  }
}
