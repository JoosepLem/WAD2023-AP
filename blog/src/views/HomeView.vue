<template>
  <div v-for="(post, index) in getPosts" :key="post.id">
    <Post :post="post" :index="index"/>
  </div>
  <div class="reset-likes">
    <button class="reset-likes-btn" @click="$store.dispatch('resetLikesAct')">Reset likes</button>
  </div>
</template>

<script>
import Post from "@/components/Post";


export default {
  components: {
    Post,
  },

  computed: {
    getPosts() {
      return this.$store.getters.getPosts;
    },
  },
};
</script>


<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    position: relative;
    min-height: 100%;
}

body {
    margin: 0 0 100px;
    font-family: 'Times New Roman', Times, serif, monospace;
    background-color: #f2f2f2;
}

.reset-likes{
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.reset-likes-btn{
  cursor: pointer;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  padding: 12px;
  background-color: deepskyblue;
}

</style>