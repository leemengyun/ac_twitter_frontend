import dayjs from 'dayjs'
import relativeTime  from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const  currentYear =  () => dayjs().year()
export const relativeTimeFromNow = a => dayjs(a).fromNow()
export const  ifCond =  function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this)
  }

