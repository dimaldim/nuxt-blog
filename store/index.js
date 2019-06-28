/* eslint-disable no-unused-vars */
import Vuex from "vuex"

export const state = () => ({})

export const actions = {
  async nuxtServerInit({ commit }, context) {
    try {
      const res = await context.app.$axios.$get("/posts.json")
      const postsArray = []
      for (const key in res) {
        postsArray.push({ ...res[key], id: key })
      }
      commit("posts/setPosts", postsArray)
    } catch (e) {
      return context.error(e)
    }
  }
}
