<template>
  <section class="post">
    <div class="post-wrapper">
      <div class="post-data">
        <img class="author-img" :src="post.profileImage" alt="">
        <p class="creation-date">{{ post.created }}</p>
      </div>
      <div v-if="post.postImage">
        <img class="post-img" :src="post.postImage" alt="">
      </div>
      <div class="post-content">
        <p>{{ post.postContent }}</p>
      </div>
      <div class="likes">
        <button class="add-like" @click="incrementLikes">
          <img class="likes-icon" :src="post.likeIcon" alt="">
        </button>
        <span>{{ post.likes }} likes</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },

  methods: {
    incrementLikes() {
      this.$store.dispatch('incrementLikesAct', this.index);
    },
  },
}
</script>



<style scoped>

.likes{
  display: flex;
  justify-content: space-between;
}

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
  bottom: 70px;
  font-family: 'Times New Roman', Times, serif, monospace;
  background-color: #f2f2f2;
}

div > p {
  font-size: 18px;
}


.author-img{
  max-width: 30px;
  max-height: 30px;
}

.author-img + p{
  font-size: 16px;
}

.add-like{
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.post{
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.post-wrapper{
  padding: 25px;
  border: 1px solid #333333;
  border-radius: 10px;
  width: 650px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.post-img{
  width: 100%;
  max-height: 400px;
}



.likes-icon{
  max-width: 30px;
  max-height: 30px;
}

.post-data{
  display: flex;
  justify-content: space-between;
  align-items: center;
}




@media screen and (max-width: 780px) {
  .post{
    padding-right: 20px;
    padding-left: 20px;
  }

  .post-wrapper{
    max-width: 500px;
  }
}

</style>