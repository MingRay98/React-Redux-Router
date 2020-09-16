import React from "react";
import { history } from "./store/configureStore";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Home from "./pages/Home";
import ShowcodeRounter from "./pages/showcode/router";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Counter from "./pages/Counter";
import "./styles.css";

const App = () => {
  console.log("environment :" + process.env.NODE_ENV);
  return (
    <ConnectedRouter history={history}>
      <Header />
      <NavBar />
      <Switch>
        <Route exact={true} path="/" render={() => <Home />} />
        <Route path="/showcode" render={() => <ShowcodeRounter />} />
        <Route path="/counter" render={() => <Counter />} />
        <Route render={() => <div>404 No Page</div>} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
