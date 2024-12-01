import "./App.css";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const url = window.location.href;
  console.log(url);
  return (
    <>
      {url === "http://localhost:5173/signup" && <SignupPage />}
      {url === "http://localhost:5173/login" && <LoginPage />}
      {url === "http://localhost:5173/" && <div>HomePage</div>}
    </>
  );
}

export default App;
