import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
         
          <Route exact path={["/", "/about"]} component={About} />
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
       
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;