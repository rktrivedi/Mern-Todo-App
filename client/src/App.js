import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Signin from "./Components/LogIn/SignIn";
import SignUp from "./Components/LogIn/SignUp";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Signin /> */}
      <SignUp />
    </div>
  );
}

export default App;
