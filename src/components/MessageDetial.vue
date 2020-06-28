<template>
  <div>
    <p>id:{{$route.params.id}}</p>
    <ul>
      <li>id:{{messageDetial.id}}</li>
      <li>title:{{messageDetial.title}}</li>
      <li>content:{{messageDetial.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detial",
  data() {
    return {
      messageDetial: {}
    };
  },
  mounted() {
    setTimeout(() => {
      const allMessageDetials = [
        {
          id: 1,
          title: "message1",
          content: "消息1"
        },
        {
          id: 2,
          title: "message2",
          content: "消息2"
        },
        {
          id: 3,
          title: "message3",
          content: "消息3"
        }
      ];
      this.allMessageDetials = allMessageDetials;
      if (allMessageDetials && this.$route.params.id) {
        const id = this.$route.params.id * 1;
        this.messageDetial = allMessageDetials.find(item => id === item.id);
      }
    }, 1500);
  },
  watch: {
    $route: function(value) {
      if(this.allMessageDetials && this.$route.params.id){
        const id = value.params.id * 1;
        this.messageDetial = this.allMessageDetials.find(item => id === item.id);
      }
    }
  }
};
</script>

<style>
</style>