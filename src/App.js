import React from 'react';
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
import NestedSelfPage from './pages/main/NestedSelfPage';
import LoginPage from './pages/LoginPage';
import StoryBookPage from './pages/storybooks/StoryBookPage';
import AdminPage from './pages/AdminPage';
import SettingPage from './pages/SettingPage';
import SelfPage from './pages/SelfPage';
import MainPage from './pages/MainPage';
import AdminUsers from './pages/AdminUsers';

function App() {
  return (
    <>
      <Router>
        <PageLayout>
          <Routes>
            <Route path='/' element={<StoryBookPage />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/admin' element={<AdminPage />}></Route>
            <Route path='/main' element={<MainPage />}></Route>
            <Route path='/self' element={<SelfPage />}></Route>
            <Route path='/setting' element={<SettingPage />}></Route>
            <Route path='/users' element={<AdminUsers />}></Route>
            <Route path='/main/self2' element={<NestedSelfPage />}></Route>
          </Routes>
        </PageLayout>
      </Router>
    </>
  );
}

export default App;
