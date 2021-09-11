import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Policies from "./components/Policies";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <Router>
      {/* <Topbar /> */}
      <Navbar />
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policies} exact />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
    </Router>
  );
}

export default App;
