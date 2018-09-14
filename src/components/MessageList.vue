<template>
    <ul>
        <MessageListMessage
          v-for="(message, index) in messages"
          :key="index"
          :message="message"
        />
    </ul>
</template>

<script>
import MessageListMessage from '@/components/MessageListMessage'

export default {
  props: ['messages'],
  components: {
    MessageListMessage
  },
  updated () {
    this.$emit('onMessageListUpdate', 'Yo, list updated')
    console.log('UPDATED')
  }
}
</script>

<style lang="scss" scoped>
  ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    overflow: hidden;
    min-height: 50vmin;
    padding: 0;
  }

</style>
