/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Cookie from "js-cookie"

export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  authenticateUser({ commit, dispatch }, authData) {
    let authUrl =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
      process.env.fbAPIKey
    if (!authData.isLogin) {
      authUrl =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
        process.env.fbAPIKey
    }
    return this.$axios
      .$post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(result => {
        commit("setToken", result.idToken)
        localStorage.setItem("token", result.idToken)
        localStorage.setItem(
          "tokenExpiration",
          new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
        )
        Cookie.set("jwt", result.idToken)
        Cookie.set(
          "expirationDate",
          new Date().getTime() + +Number.parseInt(result.expiresIn) * 1000
        )
        return this.$axios.$post("http://localhost:3000/api/track-data", {
          data: "Authenticated"
        })
      })
      .catch(e => console.log(e))
  },
  initAuth({ commit, dispatch }, req) {
    let token, expirationDate
    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="))
      if (!jwtCookie) {
        return
      }
      token = jwtCookie.split("=")[1]
      expirationDate = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("expirationDate="))
        .split("=")[1]
    } else if (process.client) {
      token = localStorage.getItem("token")
      expirationDate = localStorage.getItem("tokenExpiration")
    } else {
      token = null
      expirationDate = null
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log("No token or invalid token")
      dispatch("logout")
      return
    }
    commit("setToken", token)
  },
  logout({ commit }) {
    commit("clearToken")
    Cookie.remove("jwt")
    Cookie.remove("expirationDate")
    if (process.client) {
      localStorage.removeItem("token")
      localStorage.removeItem("tokenExpiration")
    }
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.token != null
  }
}
