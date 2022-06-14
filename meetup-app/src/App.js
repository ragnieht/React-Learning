import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetups";
import NewMeetUpPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>

        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}
