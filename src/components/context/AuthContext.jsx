import { login } from "../../api/auth";
import { createContext} from "react";
import { useState } from "react";
import * as jwt from 'jsonwebtoken' 
import { useContext } from "react";

const defaultAuthContext = {
  isAuthentic: false,
  currentMember: null,
  login:null,
  logout:null,
  register:null
}

const AuthContext = createContext(defaultAuthContext)

export const useAuth = ()=> useContext(AuthContext)
export const AuthProvider = ({children})=>{
  const [isAuthentical,setIsAuthentical] = useState (null)
  const [payload, setPayload] = useState (null)
  return (
    <AuthContext.Provider
      value={{
        isAuthentical,
        currentMember: payload && {
          id: payload.id,
          name: payload.name
        }
        // currentMember: {
        //   id :14,
        //   name: '炸雞排'
        // }
        ,
        login: async (user)=>{
          console.log("ok")
          const {success,data} = await login({account: user.account,
            password: user.password
          });
          const token = data.token
          const tempPayload = jwt.decode(token)
          // console.log('data',data)
          // console.log('tempPayload: ', tempPayload )
          //{id: 14, account: 'user1', email: 'user1@example.com', name: 'user1 name', avatar: null, …} 
          if (tempPayload){
            setIsAuthentical(true)
            localStorage.setItem('authToken',token)
            setPayload(tempPayload)
            //等有test-token CheckPermission 完後才導入使用者資訊
          }else{
            setIsAuthentical(false)
          }
          return success
        },
        logout: async ()=>{
          localStorage.removeItem('authToken')
          setIsAuthentical(false)
          setPayload(null)
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}