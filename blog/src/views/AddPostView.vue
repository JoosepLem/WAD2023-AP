<template>
  <div class="add-post-container">
    <div class="add-post-wrapper">
      <div class="heading">
        <h1>Add Post</h1>
      </div>

      <div class="form">
        <label for="post-body">Body:</label>
        <textarea id="post-body" placeholder="body" v-model="body"></textarea>
      </div>

      <div class="button-wrapper">
        <!-- Use router-link for navigation -->
        <router-link to="/" class="add-post-button" @click="addPost">Add</router-link>
      </div>
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
  methods: {
    addPost() {
      this.$store.dispatch('addPostAct', { data: this.body });
      // Navigate to the root page
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.add-post-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh; /* Full viewport height */
}

.add-post-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  width: 40%;
  padding: 20px; /* Add padding for spacing inside the container */
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ccc; /* Add border */
}

.heading {
  display: flex;
  justify-content: center;
}

#post-body {
  width: 100%; /* Use 100% width to expand within its container */
  min-height: 100px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  font-size: 17px;
  background-color: #f2f2f2;
  resize: vertical;
  flex-grow: 1; /* Allow textarea to grow and shrink */
}

.form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 22px;
  margin-bottom: 15px;
}

.button-wrapper {
  display: flex;
  justify-content: center;
}

.add-post-button {
  text-align: center;
  margin: 0 auto;
  width: 20%;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  font-size: 17px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  background-color: white;
  border: 1px solid black;
  transition: background-color 0.3s;
}
.add-post-button:hover {
  background-color: #d8d8d8;
}
</style>
