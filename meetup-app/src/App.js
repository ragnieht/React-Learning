import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import Layout from "./components/layout/Layout";
export default function App() {
  return (
    <Layout>
      {" "}
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetup />
        </Route>
        <Route path="/favourites" exact>
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}
