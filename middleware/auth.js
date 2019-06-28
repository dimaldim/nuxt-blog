/* eslint-disable no-unused-vars */
export default function(context) {
  console.log("[Middleware] just auth")
  if (!context.store.getters["user/isAuthenticated"]) {
    context.redirect("/admin/auth")
  }
}
