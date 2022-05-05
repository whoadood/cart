import { useContext, createContext, useReducer } from "react";
import { userReducer } from "../hooks/userReducer";

const UserContext = createContext();

export const useUserContext = () => {
  const user = useContext(UserContext);

  if (user === undefined) {
    console.log("must use user context within provider");
  }

  return user;
};

export default function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, {});
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
