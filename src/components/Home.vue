<template>
  <div>
    <h1>Home</h1>
    <router-link to="/home/news">news</router-link>&nbsp;
    <router-link to="/home/message">message</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

<style>
</style>