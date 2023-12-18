<template>
  <div class="individual-post">
    <h1>{{ "Post " + post.id }}</h1>
    <div class="post-body">
      <textarea>{{ post.body }}</textarea>
    </div>
    <div class="post-actions">
      <button @click="updatePost">Update</button>
      <button @click="deletePost">Delete</button>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    const postId = this.$route.params.id;
    this.fetchPost(postId);
  },
  methods: {
    fetchPost(postId) {
      fetch(`http://localhost:3000/post/get/${postId}`)
        .then((response) => response.json())
        .then((data) => {
          this.post = data;
        })
        .catch((error) => {
          console.error("Error fetching individual post:", error);
        });
    },

    updatePost() {
      const updatedBody = document.querySelector(".post-body textarea").value;

      fetch(`http://localhost:3000/post/update/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: updatedBody,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Post updated:", data);

          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error updating post:", error);
        });
    },

    deletePost() {
      const postId = this.post.id;

      fetch(`http://localhost:3000/post/delete/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("Post deleted successfully");

            this.$router.push("/");
          } else {
            console.error("Error deleting post:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
        });
    },
  },
};
</script>

<style>
.individual-post {
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.post-body {
  margin: 20px 0;
  width: 60%;
  height: 50%;
}

.post-actions button {
  padding: 12px 20px;
  margin-right: 10px;
  cursor: pointer;
  background-color: deepskyblue;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}

.post-actions {
  display: flex;
  gap: 20px;
}

textarea {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
}
</style>
  