import { useState } from "react";
import LoginForm from "./components/LoginForm";
import AppointmentForm from "./components/AppointmentForm";
import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import RouteErrorPage from "./components/RouteErrorPage";
import ConfirmationPage from "./components/ConfirmationPage";
import MainPage from "./components/MainPage";
import Footer from "./components/ui/Footer";

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = () => {};

  return (
    <div className="bg-base-100 page font-Raleway">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new" element={<AppointmentForm />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="*" element={<RouteErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
