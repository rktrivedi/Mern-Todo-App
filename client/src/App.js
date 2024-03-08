import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Signin from "./Components/LogIn/SignIn";
import SignUp from "./Components/LogIn/SignUp";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import SignIn from "./Components/LogIn/SignIn";
import Todo from "./Components/Todo/Todo";
import Demo from "./Components/Demo/Demo";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Home /> */}
        {/* <Signin /> */}
        {/* <SignUp /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Demo" element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
