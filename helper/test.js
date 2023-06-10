const timeHelper = require('./timeHelper')

const timeData = '2023-06-10T03:29:40.000Z' // 舉例來說 timeDat拿到是這樣
const relativeTime = timeHelper.relativeTimeFromNow(timeData) // 這邊的timeData就直接帶入拿到的timeDat
console.log(relativeTime)