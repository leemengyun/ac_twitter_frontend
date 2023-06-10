import React from 'react'
import dayjs from 'dayjs'
import relativeTime  from 'dayjs/plugin/relativeTime'

function dayTime(){
  currentYear: () => dayjs().year(),
  relativeTimeFromNow: a => dayjs(a).fromNow(),
  ifCond: function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this)
  }
}
dayjs.extend(relativeTime)

// module.exports = {
//   currentYear: () => dayjs().year(),
//   relativeTimeFromNow: a => dayjs(a).fromNow(),
//   ifCond: function (a, b, options) {
//     return a === b ? options.fn(this) : options.inverse(this)
//   }
// }