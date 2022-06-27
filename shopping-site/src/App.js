import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import KidsPage from "./pages/KidsPage";
import SimpleContainer from "./layout/SimpleContainer";

export default function App() {
  return (
    <Switch>
      <SimpleContainer>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/men">
          <MenPage />
        </Route>
        <Route path="/women">
          <WomenPage />
        </Route>
        <Route path="/kids">
          <KidsPage />
        </Route>
      </SimpleContainer>
    </Switch>
  );
}
