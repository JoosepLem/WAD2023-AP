<template>
  <Post ></Post>
  <div class="reset-likes">
    <button class="reset-likes-btn" @click="$store.dispatch('resetLikesAct')">Reset likes</button>
  </div>
</template>

<script>
import Post from "@/components/Post"


export default {
  components: {
    Post
  },

  data() {
    return {

    }
  }
}
</script>

<style>
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