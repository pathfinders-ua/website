export const getWeekNumber = (date: Date, q: number): number => {
   const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
   // Set to nearest Thursday: current date + 4 - current day number
   // Make Sunday's day number 1
   d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 1))
   // Get first day of year
   let yearStart = new Date(Date.UTC(d.getUTCFullYear(), q * 3 - 3, 1))
   // Calculate full weeks to nearest Thursday
   let weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
   
   // Return week number
   return weekNo
}
