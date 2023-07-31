export const getLocaleDateStringFromUnixTimestamp = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString([], {day: "2-digit", month: "2-digit", year: "numeric"})
}
