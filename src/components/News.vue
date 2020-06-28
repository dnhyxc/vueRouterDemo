<template>
  <div>
    <ul>
      <li v-for="(item,index) in news" :key="index">
        <router-link :to="`/home/news/detial?title=${item.title}`">新闻详情</router-link>
      </li>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      news: [{ title: "new1" }, { title: "new2" }, { title: "new3" }]
    };
  }
};
</script>

<style>
</style>