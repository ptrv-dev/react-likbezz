import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { login, logout } from './redux/slices/user.slice';
import { useAppDispatch } from './redux/store';

import { IGetMeResponse } from './@types/custom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import FullPostPage from './pages/FullPostPage';

import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get<IGetMeResponse>(
          'http://localhost:4444/auth/me',
          { withCredentials: true }
        );
        dispatch(login({ ...data, isAuth: true }));
      } catch (error) {
        dispatch(logout());
      }
    }
    fetchUser();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/registration" element={<RegistrationPage />} />
        <Route path="/post/:postId" element={<FullPostPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
