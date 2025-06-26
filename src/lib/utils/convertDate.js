// sanitizes the date since it isn't always consistent
const convertDate = (dateData) => {
  if (!dateData || typeof dateData !== 'string') return null

  // splits year into manageable chunks
  const [day, month, year] = dateData.split('/')
  if (!day || !month || !year) return null

  // converts to int to check values are realistic in condition below
  const d = parseInt(day, 10)
  const m = parseInt(month, 10)
  const y = parseInt(year, 10)

  // checks to make sure dates are realistic
  if (y < 1900 || y > 2100 || m < 0 || m > 11 || d < 1 || d > 31) {
    return null
  } else if (!/^\d{4}$/.test(y)) {
    return null
  }

  const fixedDate = `${m}/${d}/${y}`
  return fixedDate
}

export default convertDate
