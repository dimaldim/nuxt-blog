export default function(context) {
  console.log("[Middleware] Check auth")
  context.store.dispatch("user/initAuth", context.req)
}
