import React from 'react';
import { useState } from 'react';
import {
  // BrowserRouter as Router,
  // Link,
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';

//import css
import './scss/main.scss';

// import component
import PageLayout from './components/layout/PageLayout';

// import HomePage from './pages/HomePage';
import NestedUserPage from './pages/main/NestedUserPage';
import LoginPage from './pages/LoginPage';
import StoryBookPage from './pages/storybooks/StoryBookPage';
// import AdminLoginPage from './pages/AdminLoginPage';
import AdminPage from './pages/AdminPage';
import SettingPage from './pages/SettingPage';
import UserPage from './pages/UserPage';
import UserOtherPage from './pages/UserOtherPage';
import UserFollowersPage from './pages/UserFollowersPage';
import MainPage from './pages/MainPage';
import AdminUsers from './pages/AdminUsers';
import Modal from './components/basic/Modal';
import ModalTweet from './components/basic/ModalTweet';
import ModalReply from './components/basic/ModalReply';
import TweetPage from './pages/TweetPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider, useAuth } from './components/context/AuthContext';

function App({ router }) {
  const [modalProOpen, setModalProOpen] = useState(false);
  const [modalTweetOpen, setModalTweetOpen] = useState(false);
  
  // console.log(`modalTweetOpen`, modalTweetOpen);
  // const basename = process.env.PUBLIC_URL;
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <PageLayout>
            <Routes>
              <Route path='*' element={<LoginPage />}></Route>
              <Route path='/storybook' element={<StoryBookPage />}></Route>
              <Route path='/login' element={<LoginPage />}></Route>
              {/* <Route path='/login/admin' element={<AdminLoginPage />}></Route> */}
              <Route path='/login/admin' element={<AdminPage />}></Route>
              <Route path='/register' element={<RegisterPage />}></Route>
              <Route
                path='/main'
                element={<MainPage 
                    setModalTweetOpen={setModalTweetOpen}/>}
              ></Route>
              <Route
                path='/user/:id'
                element={
                  <UserPage
                    setModalProOpen={setModalProOpen}
                    setModalTweetOpen={setModalTweetOpen}
                  />
                }
              ></Route>
              <Route
                path='/other/:id'
                element={
                  <UserOtherPage
                    setModalProOpen={setModalProOpen}
                    setModalTweetOpen={setModalTweetOpen}
                  />
                }
              ></Route>

              <Route
                path='/user/followers'
                element={
                  <UserFollowersPage
                    setModalProOpen={setModalProOpen}
                    setModalTweetOpen={setModalTweetOpen}
                  />
                }
              ></Route>

              <Route
                path='/main/tweet/:id'
                element={<TweetPage 
                  setModalTweetOpen={setModalTweetOpen} />}
              ></Route>
              <Route
                path='/setting'
                element={<SettingPage setModalTweetOpen={setModalTweetOpen} />}
              ></Route>
              <Route path='/admin/users' element={<AdminUsers />}></Route>
              <Route path='/main/self2' element={<NestedUserPage />}></Route>
            </Routes>
            {modalTweetOpen && (
              <ModalTweet setModalTweetOpen={setModalTweetOpen} />
            )}
            {modalProOpen && <Modal setModalProOpen={setModalProOpen} />}
            
          </PageLayout>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
