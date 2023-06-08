import React from "react";


//時間會在更新
const TweetUserName3 = ({name, account , time})=>{
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