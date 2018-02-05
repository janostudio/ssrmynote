<template>
  <div class="user-view">
    <h1 class="l-text-center user-header">游戏房间</h1>
    <section class="grid-box">
      <router-link
        v-for="(item, index) in rooms"
        :key="index"
        class="room"
        :to="`/battle/${item.id}`">
        <h3 class="l-size-18">{{item.name}}</h3>
        <p>空闲</p>
      </router-link>
    </section>
    <footer-module class="user-footer"></footer-module>
  </div>
</template>

<script>
import footerModule from '@/components/layout/footer'

export default {
  name: 'home',
  components: {
    footerModule
  },
  data () {
    return {
      rooms: [{
        id: 0,
        name: '房间1'
      }]
    }
  }
  // computed: {
  //   langs () {
  //     return this.$store.state.langs
  //   }
  // },
  // asyncData ({ store }) {
  //   return store.dispatch('GET_LANGS')
  // }
}
</script>

<style lang="stylus">
  .user-view
    height: 100vh
    display: grid
    grid-template-columns: 1fr 800px 1fr
    grid-template-rows: 60px 1fr 60px
    .user-header
      grid-area: 1 / 2
    .user-footer
      grid-area: 3 / 1 / 3 / 4
    .grid-box
      grid-area: 2 / 2
      display: grid
      grid-template-columns: repeat(4, 25%)
      .room
        height: 100px;
        grid-column-start: 1
        border: 1px solid #eee
        border-radius: 4px
        background-color: #ffffff
        text-align: center
        cursor: pointer
        transition: all 0.5s ease
        &:hover
          box-shadow: 2px 2px 6px #bbb
          transform: translateY(-2px)        
</style>
