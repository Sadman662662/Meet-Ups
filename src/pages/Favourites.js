import { useContext } from "react";
import MeetupLists from "../components/meetups/MeetupLists";
import FavouriteContext from "../store/Favourites-context";

function FavouritesPage(params) {
    const favouritesCtx=useContext(FavouriteContext);

    let content;
    if (favouritesCtx.totalFavourites === 0) {
        content = <p>Try adding some to the Favourites..</p>
    }else{
        content = <MeetupLists meetups={favouritesCtx.favourites}/>
    }
    return <section>
                <h1>My Favourites</h1>
                {content}
            </section>
}

export default FavouritesPage;