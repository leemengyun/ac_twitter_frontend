import React from 'react';
import {
  BrowserRouter as Router,
  // Link,
  Routes,
  Route,
} from 'react-router-dom';

//import css
import './scss/main.scss';

//import component
// import HomePage from './pages/HomePage';
import NestedSelfPage from './pages/main/NestedSelfPage';
import LoginPage from './pages/LoginPage';
import StoryBookPage from './pages/storybooks/StoryBookPage';
import AdminPage from './pages/AdminPage';
import SettingPage from './pages/SettingPage';
import ProfilePage from './pages/ProfilePage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<StoryBookPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/main' element={<MainPage />}></Route>
          <Route path='/profile' element={<ProfilePage />}></Route>
          <Route path='/setting' element={<SettingPage />}></Route>
          <Route path='/main/self2' element={<NestedSelfPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
