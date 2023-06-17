import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import { HeaderUser } from '../components/basic/Header';
import { TabThreeGroup } from '../components/basic/Tab';

import FollowCardList from '../components/user/FollowCardList';
import ReplyLists from '../components/user/ReplyLists';
import TweetsLists from '../components/user/TweetsLists';
import LikeLists from '../components/user/LikeLists';
import ProfileOtherCard from '../components/basic/ProfileOtherCard';
import { useParams } from 'react-router-dom';
//call api
import { getUserInfo } from '../api/userinfo';
import { useAuth } from '../components/context/AuthContext';
import { cancelFollow, getUserTweets, userFollowing } from '../api/twitter';
import ModalReply from '../components/basic/ModalReply';
import ModalTweet from '../components/basic/ModalTweet';

const UserOtherPage = ({ setModalProOpen, setModalTweetOpen }) => {
  const [tabIndex, setTabIndex] = useState('0');
  const [pathId, setPathId] = useState(Number(useParams().id)); //在推薦跟隨會隨不同的pathId變換
  //取得網址:id
  //向後端 給予(pathid)參數 拿該用戶的資料
  //分別建立一個state儲存tweets like replies資料 若state有資料便不抓取新資料 除非重整頁面
  const navigate = useNavigate();
  const {
    isAuthentic,
    member,
    modalReplyOpen,
    modalTweetOpen,
    handleChangeLikeMode,
    like,
  } = useAuth();
  // @串接 local-server 用這一個
  const [userInfo, setUserInfo] = useState({});
  const [userTweets, setUserTweets] = useState([]);
  const [userIsFollowing, setUserIsFollowing] = useState(false);
  //分別建立一個state儲存tweets like replies資料 若state有資料便不抓取新資料 除非重整頁面
  // @ tweets 的 dummy資料
  // console.log(currentMember)
  //@ profileCard 渲染後端 userInfo

  const handleUserISFollowing = async (userId) => {
    try {
      if (!userIsFollowing) {
        await userFollowing(userId);
      } else {
        await cancelFollow(userId);
      }
      setUserIsFollowing(!userIsFollowing);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserInfoAsync = async () => {
      try {
        const data = await getUserInfo(pathId);
        setUserInfo(data);
        setUserIsFollowing(data.isFollowing);
      } catch (error) {
        console.error('[getUser Info  with Async failed]', error);
      }
    };
    const getUserTweetsAsync = async () => {
      try {
        const data = await getUserTweets(pathId);
        setUserTweets(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserTweetsAsync();
    getUserInfoAsync();
  }, [pathId, like, modalTweetOpen, userIsFollowing]);

  useEffect(() => {
    if (!isAuthentic) {
      navigate('/login');
    }
  }, [navigate, isAuthentic]); //只要isAuthentic或navigation有變化便執行

  //切換下方tab
  //swtich case 與 if else概念相同，但return component更簡潔(??)
  function switchContext(tabIndex) {
    switch (tabIndex) {
      case '1':
        return <ReplyLists pathId={pathId} />;
      case '2':
        return <LikeLists pathId={pathId} tabIndex={2} />;
      default:
        return (
          <TweetsLists
            tweets={userTweets}
            onToggleLike={handleChangeLikeMode}
          />
        );
    }
  }

  return (
    <>
      <ContainerColSec
        role='user'
        setModalTweetOpen={setModalTweetOpen}
        setModalProOpen={setModalProOpen}
        memberId={member.id}
      >
        {modalTweetOpen && <ModalTweet />}
        <section className='section-outer-m col-7'>
          <div className='section-main-m'>
            <HeaderUser userAccountName='Others' userTweetsLength='33推文' />

            <ProfileOtherCard
              {...userInfo}
              setModalProOpen={setModalProOpen}
              userIsFollowing={userIsFollowing}
              onClick={handleUserISFollowing}
            />
            <TabThreeGroup tabIndex={tabIndex} setTabIndex={setTabIndex} />
            {modalReplyOpen && <ModalReply />}
            {switchContext(tabIndex)}
            {/* {tabIndex === '0' && <TweetsLists />}
            {tabIndex === '1' && <ReplyLists />}
            {tabIndex === '2' && <LikeLists />} */}
          </div>
        </section>
        <section className='section-right col-3'>
          <FollowCardList
            setPathId={setPathId}
            userIsFollowing={userIsFollowing}
          />
        </section>
      </ContainerColSec>
    </>
  );
};

export default UserOtherPage;
