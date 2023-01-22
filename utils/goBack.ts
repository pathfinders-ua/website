export const goBack = () => {
  if (window?.history?.length > 2) {
    useRouter().back()
  } else {
    return navigateTo('/gems')
  }
}
