import { useContext } from "react";
import FavoritesContext from "../store/favorites-context"

import MeetUpList from "../components/meetups/MeetUpList";

function Favorites(){
    const favoriteCtx = useContext(FavoritesContext);

    let content;

    if (favoriteCtx.totalFavorites === 0){
        content = <p>No Favorites yet. Start adding some?</p>
    } else {
        content = <MeetUpList meetups={favoriteCtx.favorites}/>
    }


    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
}

export default Favorites;