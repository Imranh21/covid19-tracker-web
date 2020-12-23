import React from "react";
import { Switch, Route } from "react-router-dom";

import Country from "./comonents/country/Country";
import Global2 from "./comonents/global/Global2";
import Show from "./comonents/show/Show";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Global2} />
      <Route exact path="/country" component={Country} />

      <Route exact path="/country/:name" component={Show} />
    </Switch>
  );
};

export default Router;
