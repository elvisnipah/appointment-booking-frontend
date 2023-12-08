import { useState } from "react";
import LoginForm from "./components/LoginForm";
import AppointmentForm from "./components/AppointmentForm";

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = () => {};

  return (
    <div className="bg-gray-100 p-4 page">
      main page
      {/* <LoginForm handleLogin={handleLogin} /> */}
      {/* <AppointmentForm /> */}
    </div>
  );
};

export default App;
