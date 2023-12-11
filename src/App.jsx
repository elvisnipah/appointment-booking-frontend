import { useState } from "react";
import LoginForm from "./components/LoginForm";
import AppointmentForm from "./components/AppointmentForm";
import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import RouteErrorPage from "./components/RouteErrorPage";
import ConfirmationPage from "./components/ConfirmationPage";

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = () => {};

  return (
    <div className="bg-gray-100 page">
      <Header />
      <Routes>
        <Route path="/" element="" />
        <Route path="/new" element={<AppointmentForm />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="*" element={<RouteErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
