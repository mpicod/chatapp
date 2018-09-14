<template>
  <div>
    <LoginForm @submit="onFormSubmit"/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import store from '../store'
export default {
  components: {
    LoginForm
  },
  methods: {
    onFormSubmit (username) {
      this.$api.userRegister(username).then((user) => {
        store.user = user
        this.$router.push({ name: 'chatroom' })
      })
    }
  }
}
</script>
