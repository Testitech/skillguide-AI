"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => any;
  logout: () => void;
  user: User | null;
}

interface User {
  name: string;
  email: string;
  skills: string[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthContextType["user"]>(null);

  const login = (userData: User) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
