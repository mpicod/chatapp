<template>
    <div>
        <form action="" @submit.prevent="onFormSubmit">
            <input type="text" placeholder="Log toi" v-model="username">
            <button>Login</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    onFormSubmit () {
      if (this.username.length > 0) {
        this.$emit('submit', this.username)
      } else {
        // display error ? :o
      }
    }
  }
}
</script>
