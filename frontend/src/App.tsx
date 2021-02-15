import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MultiSumPage from "./components/MultiSum/MultiSumPage";
import PageHeader from "./components/PageHeader/PageHeader";
import ReviewPage from "./components/Review/ReviewPage";
import SingleSumPage from "./components/SingleSum/SingleSumPage";

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Switch>
        <Route path="/" exact={true} component={ReviewPage} />
        <Route path="/review" component={ReviewPage} />
        <Route path="/single-sum" component={SingleSumPage} />
        <Route path="/multi-sum" component={MultiSumPage} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다: {location.pathname}</h2>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
