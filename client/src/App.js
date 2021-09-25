import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Policies from "./components/Policies";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/orders" component={OrderScreen} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policies} exact />
        <Route path="/" component={HomeScreen} exact />
      </Switch>
    </Router>
  );
}

export default App;
