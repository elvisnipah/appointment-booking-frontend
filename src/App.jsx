import LoginForm from "./components/LoginForm";

const App = () => {
  const handleLogin = () => {};
  return (
    <div className="bg-green-500 p-4 app">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default App;
