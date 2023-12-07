<template>
  <div class="add-post-wrapper">
    <div class="heading">
      <h1>Add Post</h1>
    </div>

    <div class="form">
      <label for="post-body">Body</label>
      <textarea id="post-body" placeholder="body" v-model="body"></textarea>

    </div>

    <div class="button-wrapper">
      <button class="add-post-button" @click="addPost">Add</button>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      body: "",
    };
  },

  methods:{
    addPost(){
      this.$store.dispatch('addPostAct', {data: this.body});

    }
  }

}

</script>


<style scoped>
.add-post-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  width: 40%;
  height: 33%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
}

.heading {
  display: flex;
  justify-content: center;
}

#post-body {
  width: 45%;
  min-height: 35px; /* Adjust the minimum height as needed */
  border-radius: 10px;
  border: none;
  padding: 5px;
  font-size: 17px;
  background-color: #f2f2f2;
  resize: vertical; /* Allows vertical resizing only */
}

.form {
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
}

label {
  font-size: 22px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}

.add-post-button {
  margin: 0 auto;
  width: 20%;
  height: 35px;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
}
</style>
