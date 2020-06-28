<template>
  <div id="app">
    <router-link to="/home">Home</router-link>&nbsp;
    <router-link to="/about">About</router-link>
    <!-- <router-link to="/home/news">News</router-link> -->
    <keep-alive>
      <router-view :appMsg="messages"></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      messages:{}
    }
  },
  mounted(){
    setTimeout(()=>{
      const appMessages={
        msg:"使用router-view传递参数"
      }
      this.messages = appMessages
    },1000)
  }
}
</script>

<style>

</style>
