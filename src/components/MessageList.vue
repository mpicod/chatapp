<template>
    <ul>
        <MessageListMessage/>
        <MessageListMessage/>
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
