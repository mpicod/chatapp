<template>
    <div>
        <form action="#" @submit.prevent="onFormSubmit">
            <input type="text" v-model="input" placeholder="Envoie un chat !">
            <button><img src="./../assets/arrow.png" alt=""></button>
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
    div{
        background-color: #F6F6F6;
        bottom: 0;
        position: sticky;
        width: 100%;
        border-radius: 0 0 0 25px;
    }
    input{
        padding: 10px;
        padding-right: 50px;
        border-radius: 999999px;
        background-color: white;
        font-weight: 600;
        font-size: 14px;
        color: lightgrey;
        border: none;

    }
    button{
        padding: 7px;
        border-radius: 50%;
        transform: translateY(0);
        background-color: #F6F6F6;
        border: none;
        color: white;
        font-weight: 600;
        font-size: 14px;
        margin: 10px;
        margin-left: -32px;
        transition: 0.2s all ease-in-out;

        &:hover{
            transform: translateY(-3px);
            transition: 0.2s all ease-in-out;
            cursor: pointer;
        }
    }
</style>
