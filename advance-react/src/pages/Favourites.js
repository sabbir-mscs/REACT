import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favourites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You Have No Fav Items</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      <MeetupList meetps={favoritesCtx.favorites}></MeetupList>
      {content}
    </section>
  );
}

export default Favourites;
