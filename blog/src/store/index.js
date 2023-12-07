import { createStore } from 'vuex'

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default createStore({
  state: {
    posts: []
  },
  getters: {
    getPosts: (state) => {
      return state.posts;
    },
  },

  mutations: {
    setPosts(state, posts) {
      state.posts = posts.map(post => {
        return {
          id: post.id,
          body: post.body,
          date: formatDate(post.date) // Format the date
        };
      });
    },

    addPost(state, post) {
      const formattedPost = {
        body: post.body,
        date: formatDate(post.date)
      };
      state.posts.push(formattedPost);
    }
  },

  actions: {
     addPostAct({ commit }, data) {
      try {
        const response =  fetch("http://localhost:3000/post/add-post", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          credentials: 'include',
          body: JSON.stringify(data)
        });
        const result =  response.json();
        commit('addPost', result); // Assuming your POST request returns the added post
      } catch (e) {
        console.error(e);
      }
    },

    getAllPostsAct({ commit }) {
      try {
        fetch(`http://localhost:3000/post/get-all`)
            .then((response) => response.json())
            .then((data) => commit('setPosts', data)); // Correctly pass a function to .then
      } catch (err) {
        console.error(err.message);
      }
    },

  },

  modules: {
  }
})
