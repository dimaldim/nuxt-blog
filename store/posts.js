/* eslint-disable no-unused-vars */
export const state = () => ({
  loadedPosts: []
})

export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  addPost(state, post) {
    state.loadedPosts.push(post)
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex(
      post => post.id === editedPost.id
    )
    state.loadedPosts[postIndex] = editedPost
  },
  deletePost(state, postId) {
    const postIndex = state.loadedPosts.findIndex(post => post.id === postId)
    state.loadedPosts.splice(postIndex, 1)
  }
}

export const actions = {
  addPost({ commit, rootState }, post) {
    const createdPost = {
      ...post,
      updatedDate: new Date()
    }
    const userToken = rootState.user.token
    this.$axios
      .$post("/posts.json?auth=" + userToken, createdPost)
      .then(data => {
        commit("addPost", {
          ...createdPost,
          id: data.name
        })
      })
      .catch(e => console.log(e))
  },
  async editPost({ commit, rootState }, editedPost) {
    try {
      const userToken = rootState.user.token
      const res = await this.$axios.$put(
        "/posts/" + editedPost.id + ".json?auth=" + userToken,
        editedPost
      )
      commit("editPost", editedPost)
    } catch (e) {
      return console.log(e)
    }
  },
  async deletePost({ commit }, postId) {
    try {
      const res = await this.$axios.$delete("/posts/" + postId + ".json")
    } catch (e) {
      return console.log(e)
    }
    commit("deletePost", postId)
  },
  setPosts({ commit }, posts) {
    commit("setPosts", posts)
  }
}

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}
