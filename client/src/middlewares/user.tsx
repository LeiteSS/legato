import React from 'react';
import { User } from '../models/modules/user/User'

export type UserContextType = {
  user: User,
  setUser: React.Dispatch<React.SetStateAction<User>>,
};

export const UserContext = React.createContext<UserContextType>({
  user: {} as User,
  setUser: null!,
});

interface Props {
  children: React.ReactNode;
}

export function UserProvider(props: Props) {
  const { children } = props;
  const [user, setUser] = React.useState({} as User);

  const value = React.useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
