<template>
  <transition name="appears">
    <li :class="{'sent': profil.username == message.user.username}">
      <div class="avatar"> {{ message.user.username.substr(0, 1) }}</div>
      <span>@{{ message.user.username }}</span>
        <p>{{ message.text }}</p>
      <div class="likes">
        <img src="@/assets/heart.png" alt="">
        <img src="@/assets/beer.png" alt="">
        <img src="@/assets/wine.png" alt="">
        <img src="@/assets/cocktail.png" alt="">
        <img src="@/assets/plus.png" alt="">
      </div>
    </li>
    <!-- v-class="{ sent : isUser }" -->
  </transition>
</template>

<script>
import store from '@/store'

export default {
  props: ['message'],
  computed: {
    profil: () => store.user
    // console.log(profil)
    // return (profil.username == this.message.user) ? true : false

    // randomColor(){
    //   const COLORS = [

    //   ]
    // }
  }
}

</script>

<style lang="scss" scoped>

  li{
    list-style-type: none;
    padding: 5px;
    margin: 5px;
    position: relative;
    display: flex;
    flex-direction: row;
    &.sent{
      flex-direction: row-reverse;
      align-self: flex-end;

    }
    p{
      padding: 12px;
      font-weight: 600;
      min-width:100px;
      max-width: 200px;
      word-wrap: break-word;
      margin: 10px;
      text-align: left;
      background-color: #F6F6F6;
      border-radius: 0px 25px 25px 25px;
    }
    &.sent p{
      background-color: rgba(#EC6663,0.9);
      border-radius: 22px 0px 22px 22px;
      text-align: right;
      color: white;
      margin-right: 10px;

    }
    div.avatar{
      text-align: center;
      text-transform: uppercase;
      vertical-align: middle;
      line-height: 40px; // to cebnter letter in div
      border-radius: 99999px;
      background-color: #F6F6F6;
      width: 40px;
      height: 40px;
      font-weight: 800;
      margin-left: 10px;
      color: white;
    }
    &.sent div{
      background-color: #EC6663;
    }
    span{
      position: absolute;
      top: 0;
      left: 65px;
      font-size: 10px;
      color: #C6C6C6;
      font-weight: 600;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
    &.sent span{
      left: unset;
      right: 65px;
    }
    .likes{
      border: 1px solid black;
      border-radius: 9999px;
      padding: 5px 8px !important;
      line-height: 9px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: absolute;
      box-sizing: border-box;
      overflow: hidden;
      background-color: transparent !important;
      img{
        padding: 0 4px;
        height: 15px;
        cursor: pointer;
      }
    }
      div.likes{
        top: 65% !important;
        left: 50% !important;
        right: unset !important;
      }
      &.sent div.likes{
        top: 65% !important;
        right: 50% !important;
        left: unset !important;
      }

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
