import Vue from 'vue'

const store = new Vue({
  data () {
    return {
      messages: [],
      user: 'null',
      users: [
        'Pablo',
        'José',
        'Hervé'
      ]
    }
  },
  created () {
    Vue.nextTick(() => {
      // @ts-ignore
      this.$api.onMessage((data) => {
        store.messages.push(data.message)
      })

      // @ts-ignore
      this.$api.onUsersUpdate(({ type, user, users }) => {
        console.log(`${user.username} just ${type} the room`)
        store.users = users
      })
      this.$api.onError((data) => {
        console.error(`Error from API ${data}`)
      })
    })
  }
})

export default store
