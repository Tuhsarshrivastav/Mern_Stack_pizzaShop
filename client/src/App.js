import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Policies from "./components/Policies";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policies} exact />
      </Switch>
    </Router>
  );
}

export default App;
