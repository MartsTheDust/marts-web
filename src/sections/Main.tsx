import { BrowserRouter as Router } from "react-router-dom";
import Menu from "../components/Menu";
import "../styles/Main.scss";

function Main() {
  return (
    <div className="main-body">
      <Router>
        <Menu />
      </Router>
    </div>
  );
}

export default Main;
