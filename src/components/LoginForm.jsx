import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/userReducer";
import { setNotification } from "../reducers/notificationReducer";
import userService from "../services/users";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userObject = await userService.login({ username, password });
      dispatch(setUser(userObject));

      window.localStorage.setItem("loggedInUser", JSON.stringify(userObject));
      setUsername("");
      setPassword("");
      dispatch(setNotification(username + "successfully logged in"));
    } catch (exception) {
      dispatch(setNotification("incorrect username/password"));
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <p className="font-bold text-3xl">Login</p>
      <label className="form-control w-full max-w-xs" htmlFor="username">
        <div className="label">
          <span className="label-text">Username:</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="form-control w-full max-w-xs" htmlFor="password">
        <div className="label">
          <span className="label-text">Password:</span>
        </div>
        <input
          type="password"
          id="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div className="flex gap-4 py-4">
        <button type="submit" className="btn">
          Login
        </button>
        <button type="button" className="btn bg-red-500 text-white">
          Cancel
        </button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func,
};

export default LoginForm;
