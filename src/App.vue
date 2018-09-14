<template>
  <div id="app">
    <Theheader/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div> -->
    <router-view @onMessageListUpdate="scrollBottom"/>
  </div>
</template>

<script>
import Theheader from './components/Theheader'
export default {
  components: {
    Theheader
  },
  methods: {
    scrollBottom: function () {
      this.scrollTop = 2000
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  bottom: 5vh;
  right: 5vh;
  width: 25%;
  min-width: 500px;
  background-color: white;

  border-radius: 0 25px 25px 25px;
  border: 2px solid #42b983;
  box-shadow: rgba(#2c3e50,0.5) 2px 2px 10px;

}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#app::-webkit-scrollbar {
    display: none;
}
</style>
