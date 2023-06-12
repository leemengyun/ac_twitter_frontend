import { createContext, useContext, useState, useEffect } from 'react';
import { login } from '../../api/auth';
import * as jwt from 'jsonwebtoken';
import { useLocation } from 'react-router-dom';

const defaultAuthContext = {
  isAuthentical: false, // 使用者是否登入的判斷依據，預設為 false，若取得後端的有效憑證，則切換為 true
  currentMember: null, // 當前使用者相關資料，預設為 null，成功登入後就會有使用者資料
  login: null, // 登入方法
  logout: null, // 登出方法
  register: null, // 註冊方法
};

const AuthContext = createContext(defaultAuthContext);

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [isAuthentical, setIsAuthentical] = useState(null);
  const [payload, setPayload] = useState(null);
  const { pathname } = useLocation();

  //封裝檢查token
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
        login: async (user) => {
          console.log('ok');
          const { success, data } = await login({
            account: user.account,
            password: user.password,
          });

          const token = data.token;
          const tempPayload = jwt.decode(token);
          console.log('data', data);
          console.log('tempPayload: ', tempPayload);
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
