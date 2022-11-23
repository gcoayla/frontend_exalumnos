import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface User {
  allowed: boolean;
}

interface UserContextProps {
  userLogged: User | null;
  login: (User: User) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [userInStorage, setUserInStorage] = useLocalStorage("userID", "");
  const [userLogged, setUserLogged] = useState<User | null>(
    userInStorage ?? null
  );

  const login = (user: User) => {
    setUserLogged(user);
    setUserInStorage(user);
  };

  const logout = () => {
    window.localStorage.clear();
    setUserLogged(null);
  };

  const value = { userLogged, login, logout };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used with in a UserProvider");
  }
  return context;
};
