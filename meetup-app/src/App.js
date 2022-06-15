import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/new-meetup">
            <NewMeetup />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
