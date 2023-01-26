export default defineNuxtRouteMiddleware(to => {
  if (to.fullPath !== '/' && to.fullPath.substring(to.fullPath.length - 1) === '/') {
    return  navigateTo(to.fullPath.substring(0, to.fullPath.length - 1))
  }
})
