<template>
  <section class="post">
    <div class="post-wrapper"  @click="showPost(post.id)">
      <div class="post-data">
        <p class="creation-date">{{ date }}</p>
      </div>
      <div class="post-content">
        <p>{{ post.body }}</p>
      </div>
    </div>
  </section>
</template>



<script>
export default {
  data() {
    return {
      date: this.post.date,
    };
  },

  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  methods: {
    showPost(postId) {
      //navigate to the route 'individual-post' and pass the postId as the id parameter.
      this.$router.push({ name: 'individual-post', params: { id: postId } });
    },
  },

}
</script>



<style scoped>
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
  max-height: 850px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}


.post-data{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.post-wrapper:hover{
  background-color: beige;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
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