import "./App.css";
import { Container } from "react-bootstrap";
import Topbar from "./components/Topbar";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Topbar />
    </Router>
  );
}

export default App;
