<template>
    <div>
        <UserList/>
        <Chatbox/>
    </div>
</template>

<script>
import UserList from '@/components/UserList'
import Chatbox from '@/components/Chatbox'

export default {
  components: {
    UserList,
    Chatbox
  }
}
</script>
