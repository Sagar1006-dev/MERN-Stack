// step-2
import React, { useState } from "react";
import UserConext from "./UserConext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserConext.Provider value={{ user, setUser }}>
      {children}
    </UserConext.Provider>
  );
};

export default UserContextProvider;
