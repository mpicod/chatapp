<template>
    <section>
        <MessageList :messages="messages"/>
        <Sendbox @messageSent="onMessageSent"/>
    </section>
</template>

<script>
import MessageList from '@/components/MessageList'
import Sendbox from '@/components/Sendbox'
import store from '@/store'

export default {
  methods: {
    onMessageSent (message) {
      // store.messages.push(message)
      this.$api.messageSend(message)
    }
    // onMessageListUpdate () {

    // }
  },
  computed: {
    messages: () => store.messages
  },
  // watch: {
  //   messages () {
  //     console.log(messages)
  //     this.nextTick(() => {
  //       console.log(store.messages)
  //       window.scrollTo(0, 2222)
  //     })
  //   }
  // },
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
