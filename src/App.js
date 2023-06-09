import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  // Link,
  Routes,
  Route,
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

function App() {
  // const [modalOpen, setModalOpen] = useState('false');

  return (
    <>
      <Router>
        <PageLayout>
          <Routes>
            <Route path='/' element={<StoryBookPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/admin' element={<AdminPage />}></Route>
            <Route path='/main' element={<MainPage />}></Route>
            <Route path='/user/:id' element={<UserPage />}></Route>
            <Route path='/setting' element={<SettingPage />}></Route>
            <Route path='/admin/users' element={<AdminUsers />}></Route>
            <Route path='/main/self2' element={<NestedUserPage />}></Route>
          </Routes>
          <Modal />
        </PageLayout>
      </Router>
    </>
  );
}

export default App;
