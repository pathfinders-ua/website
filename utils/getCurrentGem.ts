export const getCurrentGem = async () => {
  const now = useNow()
  const quarter = computed(() => Math.floor((now.value.getMonth() + 3) / 3))
  const week = getWeekNumber(new Date(), quarter.value)
  const {data: currentQuarter} = await useAsyncData('current-gem', () => queryContent('/gems/q' + quarter.value).findOne())

  const gem: CurrentGem = {
    text: currentQuarter.value?.gems?.[week - 1]?.text,
    location: currentQuarter.value?.gems?.[week - 1]?.location,
    quarter: quarter.value,
    week: week,
  }

  return gem
}
