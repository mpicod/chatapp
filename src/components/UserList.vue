<template>
    <ul>
        <UserListUser v-for="{user, index} in users" :key="index" :user="user"/> <!-- la boucle for chez VUE. : => v-bind pour lui dire que c'est une variable, sinon il met une string -->
    </ul>
</template>

<script>
import UserListUser from './UserListUser' // @ = src

export default {
  data () {
    return {
      users: [
        'Booba',
        'Kaaris',
        'Robert',
        'Jean'
      ]
    }
  },
  components: {
    UserListUser
  }
}
</script>
