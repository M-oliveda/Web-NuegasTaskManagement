import { useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { getUser } from "../services/user";

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then((result) => setUser(result));
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
