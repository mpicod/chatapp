<template>
  <transition name="appears">
    <li class="sent">
        {{message}}
    </li>
  </transition>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style lang="scss" scoped>
  li{
    list-style-type: none;
  }
  .appears-enter-active {
  transition: all .8s ease;
  }
  .appears-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .appears-enter, .appears-leave-to{
    transform: translateX(10px);
    opacity: 0;
  }
</style>
