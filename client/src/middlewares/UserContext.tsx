import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext<any>(null);;

const initialState = {
  isAuthenticated: false,
  user: null,
};

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }: {children:any}) => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};