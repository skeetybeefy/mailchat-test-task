export const getDateFromUnixTimestamp = (timestamp: number) => {
  return new Date(timestamp * 1000).getDate()
}
