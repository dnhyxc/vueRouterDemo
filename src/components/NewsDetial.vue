<template>
  <div>
    <h3>newsDetial</h3>
    <div>
      <h4>{{getnewDetial.title}}</h4>
      <h4>{{getnewDetial.content}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detial: [
        {
          title: "new1",
          content: "new1Content..."
        },
        {
          title: "new2",
          content: "new2Content..."
        },
        {
          title: "new3",
          content: "new3Content..."
        }
      ],
      newDetial: {}
    };
  },
  computed: {
    getnewDetial() {
      if (this.$route.query.title) {
        const title = this.$route.query.title;
        return this.detial.find(item => item.title === title);
      } else {
        return { title: "", content: "" };
      }
    }
  }
};
</script>

<style>
</style>