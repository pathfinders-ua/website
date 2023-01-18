declare interface Gem {
  text: string
  location: string
}

declare interface CurrentGem extends Gem {
  quarter: number
  week: number
}
