import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import AppointmentForm from "./components/AppointmentForm";
import Header from "./components/ui/Header";
import RouteErrorPage from "./components/RouteErrorPage";
import ConfirmationPage from "./components/ConfirmationPage";
import MainPage from "./components/MainPage";
import Footer from "./components/ui/Footer";
import AdminPage from "./components/AdminPage";
import { useEffect } from "react";
import { getUser } from "./reducers/userReducer";
import NotificationDisplay from "./components/ui/NotificationDisplay";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="bg-base-100 page font-Raleway">
      <Header />
      <NotificationDisplay />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new" element={<AppointmentForm />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<RouteErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
