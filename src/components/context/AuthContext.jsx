import { login } from '../../api/auth';
import { useState, useEffect, useContext, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import * as jwt from 'jsonwebtoken';

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
  const [isAuthentical, setIsAuthentical] = useState(null);
  const [payload, setPayload] = useState(null);
  //頁面刷新時，確認是誰
  const { pathname } = useLocation();

  // 封裝檢查token
  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        setIsAuthentical(false);
        setPayload(null);
        return;
      }
      // @ checkPermission 功能
      // const result = await checkPermission(authToken);
      // if (result) {
      //   setIsAuthentical(true);
      //   const tempPayload = jwt.decode(authToken);
      //   setPayload(tempPayload);
      // } else {
      //   setIsAuthentical(false);
      //   setPayload(null);
      // }

      //@ 沒有checkPermission的替代過度版 可以暫時只有檢視是否有token+token解析
      if (authToken) {
        setIsAuthentical(true);
        const tempPayload = jwt.decode(authToken);
        setPayload(tempPayload);
        return;
      }
    };
    checkTokenIsValid();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthentical,
        currentMember: payload && {
          id: payload.id,
          name: payload.name,
          avatar: payload.avatar,
        },
        // currentMember: {
        //   id :14,
        //   name: '炸雞排'
        // }
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
            setIsAuthentical(true);
            localStorage.setItem('authToken', token);
            setPayload(tempPayload);
            //等有test-token CheckPermission 完後才導入使用者資訊
          } else {
            setIsAuthentical(false);
          }
          return success;
        },
        logout: async () => {
          localStorage.removeItem('authToken');
          setIsAuthentical(false);
          setPayload(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
