import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "../styles/login.css";

export default function Login() {
  const { login } = useUserContext();
  const navigate = useNavigate();

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
        return;
      }

      if (!password) {
        console.log("error password");
        return;
      }

      if (username !== "" && password !== "") {
        login(username, password);
      }
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/");
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
