export const getLocaleTimeStringFromUnixTimestamp = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"})
}
