import React from "react";
// import timeHelper from "../../../helper/timeHelper";
//時間會在更新
const TweetUserName3 = ({name, account , time})=>{
    // const relativeTime = timeHelper.relativeTimeFromNow(time)
    // console.log(relativeTime)
    return (    
        <div className='tweet-username-3'>
          <span className='user-name'>
            {name}
          </span>
          <span className='user-account'>
            @{account}
          </span>
          <span className='user-time'> ·{time}小時</span>
        </div>
    )
  }

  export default TweetUserName3;