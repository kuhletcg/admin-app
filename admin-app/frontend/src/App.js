import "./App.css";
import EmployeeFormRegister from "./components/EmployeeFormRegister";
import DisplayEmployees from "./components/DisplayEmployees";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <h1>Admin register</h1>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={EmployeeFormRegister} />
          <Route path="/displayEmployees" component={DisplayEmployees} />
        </Switch>
      </Router>
      <EmployeeFormRegister />
    </div>
  );
}

export default App;
