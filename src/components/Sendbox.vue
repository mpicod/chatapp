<template>
    <div>
        <form action="#" @submit.prevent="onFormSubmit">
            <input type="text" v-model="input">
            <button>Send</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  methods: {
    onFormSubmit () {
      this.$emit('messageSent', this.input)
      this.input = ''
    }
  }
}
</script>

<style lang="scss" scoped>
    input{
        padding: 5px;
    }
    button{
        padding: 10px;
        border-radius: 10px;
        transform: translateY(0);
        background-color: #42b983;
        border: none;
        color: white;
        font-weight: 600;
        font-size: 14px;
        margin: 10px;
        transition: 0.2s all ease-in-out;

        &:hover{
            transform: translateY(-3px);
            transition: 0.2s all ease-in-out;
            cursor: pointer;
        }
    }
</style>
