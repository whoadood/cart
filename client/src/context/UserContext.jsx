import { useContext, createContext, useReducer } from "react";
import { userReducer } from "../hooks/userReducer";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "USER_LOGOUT" });
    navigate("/");
  };

  const login = (username, password) => {
    localStorage.setItem("user", username);
    dispatch({ type: "USER_LOGIN", user: { username, password } });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
