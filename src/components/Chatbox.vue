<template>
    <section>
        <MessageList :messages="messages" @onMessageListUpdate="onMessageListUpdate"/>
        <Sendbox @messageSent="onMessageSent"/>
    </section>
</template>

<script>
import MessageList from '@/components/MessageList'
import Sendbox from '@/components/Sendbox'
import store from '@/store'

export default {
  // data () {
  //   return {
  //     messages: []
  //   }
  // },
  methods: {
    onMessageSent (message) {
      store.messages.push(message)
    },
    onMessageListUpdate () {

    }
  },
  computed: {
    messages: () => store.messages
  },
  components: {
    MessageList,
    Sendbox
  }

}
</script>
<style lang="scss" scoped>
  section{
    overflow-y: scroll;
    height: 40vh;
  }
</style>
