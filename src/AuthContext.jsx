import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const users = [
    {
      user: "Andreaara",
      name: "Andrea Aragón Márquez",
      rol: "User",
      password: "764andrea"
    },
    {
      user: "GetseCruz",
      name: "Getsemaní Cruz Millán",
      rol: "Admin",
      password: "getse#$@"
    },
    {
      user: "Evelinmq",
      name: "Evelin Itzel Mojica Quintana",
      rol: "User",
      password: "evelin123mq"
    },
    {
      user: "KevinD",
      name: "Kevin Daniel Sandoval Rueda",
      rol: "Admin",
      password: "123"
    },
    {
      user: "dRecillas",
      name: "Diego Emiliano Reyes Recillas",
      rol: "User",
      password: "diego_928"
    }
  ];

  const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.user === username && u.password === password
    );

    if (foundUser) {
  setUser(foundUser);
  localStorage.setItem("user", JSON.stringify(foundUser));
  return true;
}

    return false;
  };

  const logout = () => {
  setUser(null);
  localStorage.removeItem("user");
};

  return (
    <AuthContext.Provider value={{ user, login, logout, users }}>
      {children}
    </AuthContext.Provider>
  );
}