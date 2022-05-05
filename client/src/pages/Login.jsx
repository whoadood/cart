import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import "../styles/login.css";

export default function Login() {
  const { user, dispatch } = useUserContext();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = form;

  const handleChange = (e) => {
    setForm(() => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username) {
        console.log("error");
      }

      if (!password) {
        console.log("error password");
      }

      await setTimeout(
        () => dispatch({ type: "USER_LOGIN", user: form }),
        3000
      );

      console.log("complete");
    } catch (err) {
      console.error(err);
    } finally {
      if (user.username) console.log(user);
    }
  };

  return (
    <>
      <h2>login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">
          <span>username:</span>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          <span>password:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
