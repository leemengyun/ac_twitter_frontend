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
import StoryBookPage from './pages/StoryBookPage';
// import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<StoryBookPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/main/self2' element={<NestedSelfPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
