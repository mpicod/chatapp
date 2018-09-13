<template>
  <div id="app">
    <Theheader/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import Theheader from './components/Theheader'
export default {
  components: {
    Theheader

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 20%;
  min-width: 300px;
  height: 40vh;;
  position: absolute;
  bottom: 5vh;
  right: 5vh;
  overflow-y: scroll;
  overflow-x: hidden;

  border-radius: 10px;
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
</style>
