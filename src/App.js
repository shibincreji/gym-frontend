import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import customer from "./components/cruds/customer";
import admin from "./components/cruds/admin";
import adminlist from "./components/cruds/adminlist";
import customerlist from "./components/cruds/customerlist";
import welcomeadmin from "./components/welcomeadmin";
import welcomecustomer from "./components/welcomecustomer";
import login from "./containers/Login";
import customerlogin from "./containers/LoginCustomer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Fotter from "./components/layout/fotter";
import Jumbotron from "./components/Jumbotron";
import warmup from "./components/Warmup";
import day1 from "./components/Day1";
import day2 from "./components/Day2";
import day3 from "./components/Day3";
import day4 from "./components/Day4";
import restday from "./components/Restday";
import NavigationBar1 from "./components/layout/NavigationBar1";
//import NavigationBar2 from './components/layout/NavigationBar2'
import NavigationBar4 from "./components/layout/NavigationBar4";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar1 />
        <NavigationBar4 />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/warmup" component={warmup} />
          <Route exact path="/day1" component={day1} />
          <Route exact path="/day2" component={day2} />
          <Route exact path="/day3" component={day3} />
          <Route exact path="/day4" component={day4} />
          <Route exact path="/restday" component={restday} />

          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={login} />
          <Route exact path="/customerlogin" component={customerlogin} />
          <Route exact path="/customer" component={customer} />
          <Route exact path="/admin" component={admin} />
          <Route exact path="/adminlist" component={adminlist} />
          <Route exact path="/customerlist" component={customerlist} />
          <Route exact path="/welcomeadmin" component={welcomeadmin} />
          <Route exact path="/welcomecustomer" component={welcomecustomer} />

          <Route component={NoMatch} />
        </Switch>
        <Fotter />
      </Router>
    </div>
  );
}

export default App;
