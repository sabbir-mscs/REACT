import { Switch, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetups";
import Layout from "./components/layouts/Layout";

function App() {
  //localhost:3000

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetups">
          <NewMeetupsPage />
        </Route>
        <Route path="/favuorites">
          <FavoritesPage />
        </Route>
      </Switch>

      {/* For Dom version 6 or heigher */}
      {/* <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetups" element={<NewMeetupsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes> */}
    </Layout>
  );
}

export default App;
