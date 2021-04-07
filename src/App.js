import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { HomeComponent } from "./components/home/home";
import { NavBarComponent } from "./components/Navegation/NavBar";
function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <div className="cont">
        <Router>
          <Route path="/home" component={HomeComponent} />
        </Router>
      </div>
    </div>
  );
}

export default App;
