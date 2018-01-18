<template>
  <div class="user-view">
    <h1>User not found.</h1>
    <h2>{{langs}}</h2>
  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    langs () {
      return this.$store.state.langs
    }
  },
  asyncData ({ store }) {
    return store.dispatch('GET_LANGS')
  }
}
</script>

<style lang="stylus">
.user-view
  background-color #fff
  box-sizing border-box
  padding 2em 3em
  h1
    margin 0
    font-size 1.5em
  .meta
    list-style-type none
    padding 0
  .label
    display inline-block
    min-width 4em
  .about
    margin 1em 0
  .links a
    text-decoration underline
</style>
