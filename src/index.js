import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import FandP from "./FandP";
import ERD from "./ERD";
import STAR from "./STAR";
import Interim from "./Interim";
import AppNav from "./AppNav";
import StandardsAverages from "./StandardsAverages";
import StandardsAveragesLine from "./StandardsAveragesLine";
import StandardsByTeacher from "./StandardsByTeacher";
import history from "./history";

const AppRouter = () => (
  <Router history={history}>
    <div>
      <AppNav />
      <Route
        path="/FandP"
        render={props => (
          <FandP
            {...props}
            link={"1EiX_zzLZZrfJxCSdqoNKaEXTmnkHxsGG9_g1OBJPOfw"}
          />
        )}
      />

      <Route
        path="/ERD"
        render={props => (
          <ERD
            {...props}
            link={"1fJVbCem-cWT4nF1Mu1WjxK-TXBqgFqUq9qHQZHXl_U4"}
          />
        )}
      />
      <Route
        path="/STAR"
        render={props => (
          <STAR
            {...props}
            link={"101wu9XbRzVCYhzlWlamgB7JWM-tzz4XMOkOULBVJxvg"}
          />
        )}
      />
      <Route
        path="/interim"
        render={props => (
          <Interim
            {...props}
            link={"1r2bEdIquj0uwJyKI14cSbQ5ZIrste8iT51Z1M5hcejQ"}
          />
        )}
      />
      <Route
        path="/standards"
        render={props => (
          <StandardsAverages
            {...props}
            link={"1op2U9Vo6wCz_klBiq6Iz-DZpIfDTGYQL4yz1DNCH-wE"}
          />
        )}
      />
      <Route
        path="/standards-averages"
        render={props => (
          <StandardsAveragesLine
            {...props}
            link={"1op2U9Vo6wCz_klBiq6Iz-DZpIfDTGYQL4yz1DNCH-wE"}
          />
        )}
      />
      <Route
        path="/standardsbyteacher"
        render={props => (
          <StandardsByTeacher
            {...props}
            link={"1MS2j7Tg8u6G9yJnO75hkswFAdEwskbLsx44povTF7jI"}
          />
        )}
      />
    </div>
  </Router>
);

export default AppRouter;

ReactDOM.render(
  <AppRouter />,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
