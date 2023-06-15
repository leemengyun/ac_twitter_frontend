import { login } from '../../api/auth';
import { useState, useEffect, useContext, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import * as jwt from 'jsonwebtoken';
import { set } from 'react-hook-form';

const defaultAuthContext = {
  isAuthentic: false,
  currentMember: null,
  login: null,
  logout: null,
  register: null,
};

const AuthContext = createContext(defaultAuthContext);

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthentic, setIsAuthentic] = useState(null);
  const [payload, setPayload] = useState(null);
  //頁面刷新時，確認是誰
  const { pathname } = useLocation();
  const [modalReplyOpen, setModalReplyOpen] = useState(false);
  const [tweetId, setTweetId] = useState(null);
  const [member, setMember] = useState({});

  // 封裝檢查token
  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        setIsAuthentic(false);
        setPayload(null);
        return;
      }
      // @ checkPermission 功能
      // const result = await checkPermission(authToken);
      // if (result) {
      //   setisAuthentic(true);
      //   const tempPayload = jwt.decode(authToken);
      //   setPayload(tempPayload);
      // } else {
      //   setisAuthentic(false);
      //   setPayload(null);
      // }

      //@ 沒有checkPermission的替代過度版 可以暫時只有檢視是否有token+token解析
      if (authToken) {
        setIsAuthentic(true);
        const tempPayload = jwt.decode(authToken);
        setPayload(tempPayload);
        setMember(tempPayload);
        return;
      }
    };
    checkTokenIsValid();
  }, [pathname]);



  return (
    <AuthContext.Provider
      value={{
        isAuthentic,
        currentMember: payload && {
          id: payload.id,
          name: payload.name,
          avatar: payload.avatar,
        },
        setModalReplyOpen,
        modalReplyOpen,
        setTweetId,
        tweetId,
        member,
        login: async (user) => {
          console.log('ok');
          const { success, data } = await login({
            account: user.account,
            password: user.password,
          });
          const token = data.token;
          const tempPayload = jwt.decode(token);
          // console.log('data',data)
          // console.log('tempPayload: ', tempPayload )
          //{id: 14, account: 'user1', email: 'user1@example.com', name: 'user1 name', avatar: null, …}
          if (tempPayload) {
            setIsAuthentic(true);
            localStorage.setItem('authToken', token);
            setPayload(tempPayload);
            //等有test-token CheckPermission 完後才導入使用者資訊
            setMember(tempPayload);
          } else {
            setIsAuthentic(false);
          }
          return success;
        },
        logout: async () => {
          localStorage.removeItem('authToken');
          setIsAuthentic(false);
          setPayload(null);
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};