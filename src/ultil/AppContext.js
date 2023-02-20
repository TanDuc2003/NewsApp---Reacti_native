/* eslint-disable react/react-in-jsx-scope */
import {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppContextProvider = props => {
  const {children} = props;
  const [isLogin, setIsLogin] = useState(false); //false: chua dang nhap
  const [infoUser, setinfoUser] = useState({});
  return (
    <AppContext.Provider value={{isLogin, setIsLogin, infoUser, setinfoUser}}>
      {children}
    </AppContext.Provider>
  );
};
