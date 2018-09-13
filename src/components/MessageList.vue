<template>
    <ul>
        <MessageListMessage v-for="(message, index) in messages" :key="index" :message="message"/>
    </ul>
</template>

<script>
import MessageListMessage from '@/components/MessageListMessage'

export default {
  props: ['messages'],
  components: {
    MessageListMessage
  }
}
</script>
