<template>
    <li>
        {{ user }}
    </li>
</template>

<script>

export default {
  props: [
    'user'
  ]
}
</script>

<style lang="scss" scoped>
  li{
    position: relative;
    padding: 2px;
    &::after{
    content: '';
    background-color: #42b983;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    position: absolute;
    top: 0;
    left: 0;
  }
}

</style>
