<template>
  <div>
    <h3>Message</h3>
    <ul>
      <li v-for="item in messages" :key="item.id">
        <router-link :to="`/home/message/detial/${item.id}`">{{item.title}}</router-link>
        <button @click="pushLook(item.id)">push查看</button>
        <button @click="replaceLook(item.id)">replace查看</button>
      </li>
    </ul>
    <button @click="goBack">goBack</button>
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
      messages: []
    };
  },
  mounted() {
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: "message1"
        },
        {
          id: 2,
          title: "message2"
        },
        {
          id: 3,
          title: "message3"
        }
      ];
      this.messages = messages;
    }, 1000);
  },
  methods: {
    pushLook(id) {
      console.log(this.$router, id);
      if (id != this.$route.params.id) {
        this.$router.push(`/home/message/detial/${id}`);
      }
    },
    replaceLook(id) {
      if (id != this.$route.params.id) {
        this.$router.replace(`/home/message/detial/${id}`);
      }
    },
    goBack(){
      this.$router.back()
    }
  }
};
</script>

<style>
</style>