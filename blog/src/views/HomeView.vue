<template>
  <div class="wrapper">
    <button  @click="Logout" class="logout">Logout</button>
    <div v-for="(post) in getPosts">
      <Post :post="post"/>
    </div>
    <div class="post-buttons">
      <button class="post-btn" @click="openAddPost">Add post</button>
      <button class="post-btn" @click="deleteAllPosts">Delete all</button>
    </div>
  </div>


</template>

<script>
import Post from "@/components/Post";


export default {
  components: {
    Post,
  },

  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include',
      })
          .then((response) => response.json())
          .then((data) => {
            location.assign("/");
          })
          .catch((e) => {
            console.log("error logout");
          });
    },

    openAddPost(){
      this.$router.push("/add-post");
    },

    deleteAllPosts() {
      this.$store.dispatch('deleteAllPostsAct');
    },
  },
  

  computed: {
    getPosts() {
      return this.$store.getters.getPosts;
    },
  },

  mounted() {
    this.$store.dispatch('getAllPostsAct');

  }

};
</script>


<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.logout {
  width: 70px;
  height: 40px;
  margin: 23px auto 0;
  background-color: deepskyblue;
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  color: black;
  border: none;
}

html{
    position: relative;
    min-height: 100%;
}

body {
    margin: 0 0 100px;
    font-family: 'Times New Roman', Times, serif, monospace;
}

.wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
}

.post-buttons{
  display: flex;
  justify-content: space-between;
  width: 650px;
  margin: 30px auto 0;
}

.post-btn{
  cursor: pointer;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  padding: 12px;
  background-color: deepskyblue;
}

</style>