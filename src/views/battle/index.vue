<template>
  <div class="battle">
    <battle-stack class="battle-stack"></battle-stack>

    <handscard-a class="userA-hand"></handscard-a>
    <status-a class="userA-status"></status-a>

    <skill-show class="skill-show"></skill-show>

    <handscard-b class="userB-hand"></handscard-b>
    <status-b class="userB-status"></status-b>

    <battle-time class="battle-time"></battle-time>
    <skill-tips class="skill-tips"></skill-tips>
    <!-- <div class="chat-box">聊天室？</div> -->
  </div>
</template>

<script>
import battleStack from './components/battle-stack'
import handscardA from './components/handscard-a'
import handscardB from './components/handscard-b'
import statusA from './components/status-a'
import statusB from './components/status-b'
import skillShow from './components/skill-show'
import battleTime from './components/battle-time'
import skillTips from './components/skill-tips'

export default {
  name: 'Battle',
  components: {
    battleStack,
    handscardA,
    handscardB,
    statusA,
    statusB,
    skillShow,
    battleTime,
    skillTips
  }
}
</script>

<style lang="stylus">
  .battle
    height: 100vh
    display: grid
    grid-template-columns: 200px 1fr 200px
    grid-template-rows: 100px 60px 1fr 60px 100px
    .battle-stack
      border: 1px solid #ccc
      grid-area: 2/1/5/1
    .userA-hand
      border: 1px solid #ccc
      grid-area: 5/2
    .userA-status
      border: 1px solid #ccc
      grid-area: 4/2
    .skill-show
      border: 1px solid #ccc
      grid-area: 3/2
    .userB-hand
      border: 1px solid #ccc
      grid-area: 2/2
    .userB-status
      border: 1px solid #ccc
      grid-area: 1/2
    .battle-time
      border: 1px solid #ccc
      grid-area: 1/3
    .skill-tips
      border: 1px solid #ccc
      grid-area: 2/3/5/3
    // .chat-box
    //   border: 1px solid #ccc
    //   grid-area: 5/3
</style>



