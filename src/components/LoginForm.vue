<template>
    <div class="container">
        <div class="avatar">{{ username.substr(0, 1) }}</div>
        <form action="" @submit.prevent="onFormSubmit">
            <input type="text" placeholder="Log toi" v-model="username" autofocus>
            <button><img src="./../assets/arrow.png" alt=""></button>
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

<style lang="scss" scoped>
  div.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  div.avatar{
    background-color: #EC6663;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top:50px;
    line-height: 100px;
    color: white;
    font-weight: 800;
    font-size: 50px;
    text-transform: uppercase;
  }
  form{
      padding: 50px;
  }
      input{
      padding: 10px;
      padding-right: 50px;
      border-radius: 0 99px 99px 99px;
      background-color: #F6F6F6;
      font-weight: 600;
      font-size: 14px;
      color: lightgrey;
      border: none;

  }
  button{
      padding: 7px;
      border-radius: 50%;
      transform: translateY(0);
      background-color: white;
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
