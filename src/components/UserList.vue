<template>
    <ul>
        <UserListUser v-for="(user, index) in users" :key="index" :user="user"/> <!-- la boucle for chez VUE. : => v-bind pour lui dire que c'est une variable, sinon il met une string -->
    </ul>
</template>

<script>
import UserListUser from './UserListUser' // @ = src
import store from '@/store'

export default {
  // data () {
  //   return {
  //     users: [
  //       'Booba',
  //       'Kaaris',
  //       'Robert',
  //       'Jean',
  //       'Pierre'
  //     ]
  //   }
  // },
  computed: {
    users: () => store.users
  },
  components: {
    UserListUser
  }
}
</script>

<style lang="scss" scoped>
  ul{
    margin-top: 50px;
    list-style-type: none;
    font-weight: 600;
    position: relative;
    text-align: left;
  }
</style>
