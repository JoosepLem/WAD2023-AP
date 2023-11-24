<template>
  <Header />
  <Post ></Post>
  <div class="reset-likes">
    <button class="reset-likes-btn" @click="$store.dispatch('resetLikesAct')">Reset likes</button>
  </div>
  <Footer />
</template>

<script>
  import Post from "@/components/Post";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  export default {
    components: {
      Post,
      Header,
      Footer,
    },

    data() {
      return {};
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