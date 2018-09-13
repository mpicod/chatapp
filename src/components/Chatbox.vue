<template>
    <section>
        <MessageList :messages="messages"/>
        <Sendbox @messageSent="onMessageSent"/>
    </section>
</template>

<script>
import MessageList from '@/components/MessageList'
import Sendbox from '@/components/Sendbox'

export default {
  data () {
    return {
      messages: []
    }
  },
  methods: {
    onMessageSent (message) {
      this.messages.push(message)
    }
  },
  components: {
    MessageList,
    Sendbox
  }
}
</script>
