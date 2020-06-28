<template>
  <div>
    <h1>About</h1>
    <h2>keep-alive可保存路由离开时的状态</h2>
    <h3>从App中传递的参数：{{appMsg.msg}}</h3>
    <input type="text" v-model.lazy="message"/>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      message:''
    };
  },
  props:{
    appMsg:Object
  }
};
</script>

<style>
</style>