import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import custom components
import ContainerColSec from '../components/layout/ContainerColSec';
import { HeaderUser } from '../components/basic/Header';
import { TabTwoGroup } from '../components/basic/Tab';

//call api
import { getUserInfo } from '../api/userinfo';
import { useAuth } from '../components/context/AuthContext';
// import { getUserTweets } from '../api/twitter';

const UserFollowersPage = ({ setModalProOpen, setModalTweetOpen }) => {
  const [tabIndex, setTabIndex] = useState('0');
  // const pathId = Number(useParams()); //取得網址
  //向後端 給予(pathid)參數 拿該用戶的資料
  //分別建立一個state儲存tweets like replies資料 若state有資料便不抓取新資料 除非重整頁面
  const navigate = useNavigate();
  const { isAuthentic, currentMember } = useAuth();
  // @串接 local-server 用這一個
  const [userInfo, setUserInfo] = useState({});
  //分別建立一個state儲存tweets like replies資料 若state有資料便不抓取新資料 除非重整頁面
  // @ tweets 的 dummy資料
  // console.log(currentMember)
  //@ profileCard 渲染後端 userInfo

  useEffect(() => {
    const getUserInfoAsync = async () => {
      try {
        const userInfo = await getUserInfo(currentMember.id);
        setUserInfo(userInfo);
      } catch (error) {
        console.error('[getUser Info  with Async failed]', error);
      }
    };
    getUserInfoAsync();
  }, []);

  useEffect(() => {
    if (!isAuthentic) {
      navigate('/login');
    }
  }, [navigate, isAuthentic]); //只要isAuthentic或navigation有變化便執行

  //切換下方tab
  //swtich case 與 if else概念相同，但return component更簡潔(??)
  function switchContext(tabIndex) {
    switch (tabIndex) {
      case '0':
        return <h1>替換成 tab0要用的component</h1>;
      default:
        return <h1>替換成 tab1要用的component</h1>;
    }
  }

  return (
    <>
      <ContainerColSec
        role='user'
        setModalTweetOpen={setModalTweetOpen}
        setModalProOpen={setModalProOpen}
        pageIndex={1}
        memberId={userInfo.id}
      >
        <section className='section-outer-m col-7'>
          <div className='section-main-m'>
            <HeaderUser userAccountName='John Doe' userTweetsLength='25推文' />

            <TabTwoGroup tabIndex={tabIndex} setTabIndex={setTabIndex} />

            {switchContext(tabIndex)}
          </div>
        </section>
        <section className='section-right col-3'>
          {/* <FollowCardList /> */}
        </section>
      </ContainerColSec>
    </>
  );
};

export default UserFollowersPage;