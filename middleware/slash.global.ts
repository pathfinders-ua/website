export default defineNuxtRouteMiddleware(to => {
  console.log(to.fullPath)
  if (to.fullPath.substring(to.fullPath.length - 1) === '/') {
    navigateTo(to.fullPath.substring(0, to.fullPath.length - 1))
  }
})
