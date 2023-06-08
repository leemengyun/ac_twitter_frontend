import React from "react";
import UserAvatar from "./UserAvatar";
import TweetUserName2 from "./TweetUserName2"


const FollowCardList = ({...props})=>{
  return (
    <div className='follow-card'>
      <UserAvatar 
        avatr={props.avatr}
      />
      <TweetUserName2
        name={props.name}
        account={props.account}
      /> 
      <button className='button-md button-m' type='submit'>
              跟蹤
      </button>
    </div>
  )
}

export default FollowCardList;