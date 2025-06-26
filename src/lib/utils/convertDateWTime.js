// sanitizes the date since it isn't always consistent
const convertDateWTime = (dateTimeData) => {
  if (!dateTimeData || typeof dateTimeData !== 'string') return null

  // splits year and time into manageable chunks
  const [yearData, timeData] = dateTimeData.split(' ')
  const [year, month, day] = yearData.split('-')
  const [hour, minute, second] = timeData.split(':')

  if (!year || !month || !day || !hour || !minute || !second) return null

  // converts to int to check values are realistic in condition below
  const y = parseInt(year, 10)
  const m = parseInt(month, 10)
  const d = parseInt(day, 10)
  const hourMil = parseInt(hour, 10)
  const h = hourMil % 12 === 0 ? 12 : hourMil % 12
  const mn = parseInt(minute, 10)
  const s = parseInt(second, 10)
  const amPm = hourMil >= 12 ? 'PM' : 'AM'

  // checks to make sure dates and times are realistic
  if (y < 1900 || y > 2100 || m < 0 || m > 11 || d < 1 || d > 31) {
    return null
  } else if (h < 1 || h > 12 || mn < 1 || mn > 60 || s < 1 || s > 60) {
    return null
  }

  const fixedDateWTime = `${m}/${d}/${y} ${h}:${mn}.${s} ${amPm} (GMT)`
  return fixedDateWTime
}

export default convertDateWTime
