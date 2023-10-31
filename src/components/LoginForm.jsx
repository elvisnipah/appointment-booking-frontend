import { useState } from "react";
import PropTypes from "prop-types";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <p>Login</p>
      <label htmlFor="username">
        Username:{" "}
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <div>
        <button type="submit">Login</button>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
};

LoginForm.PropTypes = {
  handleLogin: PropTypes.func,
};

export default LoginForm;
