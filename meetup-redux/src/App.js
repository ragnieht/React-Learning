import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import FavouritesPage from "./pages/FavouritesPage";
import Layout from "./components/layout/Layout";
import { useDispatch } from "react-redux";
import { getMeetupsAsync } from "./store/meetupSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeetupsAsync());
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetupPage />
        </Route>
        <Route path="/favourites" exact>
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}
