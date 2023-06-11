import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
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
import AdminPage from './pages/AdminPage';
import SettingPage from './pages/SettingPage';
import UserPage from './pages/UserPage';
import MainPage from './pages/MainPage';
import AdminUsers from './pages/AdminUsers';
import Modal from './components/basic/Modal';
import TweetPage from './pages/TweetPage';
import { AuthProvider } from './components/context/AuthContext';



function App({ router }) {
  const [modalOpen, setModalOpen] = useState(false);
  // const basename = process.env.PUBLIC_URL;

  return (
    <>
      <Router >
        <AuthProvider>
          <PageLayout>
            <Routes>
              <Route path='*' element={<StoryBookPage />}></Route>
              <Route path='/login' element={<LoginPage />}></Route>
              <Route path='/admin' element={<AdminPage />}></Route>
              <Route
                path='/main'
                element={<MainPage setModalOpen={setModalOpen} />}
              ></Route>
              <Route path='/user/:id' element={<UserPage />}></Route>
              <Route path='/main/tweet/:id' element={<TweetPage />}></Route>
              <Route path='/setting' element={<SettingPage />}></Route>
              <Route path='/admin/users' element={<AdminUsers />}></Route>
              <Route path='/main/self2' element={<NestedUserPage />}></Route>
            </Routes>
            {modalOpen && <Modal setModalOpen={setModalOpen} />}
          </PageLayout>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
