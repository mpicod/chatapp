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

<style lang="scss" scoped>
  ul{
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  li{
    list-style-type: none;
    background-color: rgb(242, 242, 242);
    padding: 5px;
    margin: 5px;
    &.sent{
      text-align: right;
      color: white;
      background-color: rgba(#42b983,0.9);
      border-radius: 10px 10px 0px 10px;
      padding: 5px;
      font-weight: 600;
    }
    &.received{
      text-align: left;
    }
  }
</style>
