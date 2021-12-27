import { createContext, useState } from "react";

const FavouriteContext = createContext({
    favourites:[],
    totalFavourites:0,
    addFavourite:(favouriteMeetup) => {},
    removeFavourite:(meetupId) => {},
    itemFavourite:(meetupId) => {}
});

export function FavouritesContextProvider(props) {
    const [userFavourites,setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup) {
        setUserFavourites((previousUserFavourites)=>{
            return previousUserFavourites.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites(previousUserFavourites=>{
            return previousUserFavourites.filter(meetup=>meetup.id !== meetupId);
        })
    }

    function isFavouriteHandler(meetupId) {
        return userFavourites.some(meetup=>meetup.id === meetupId);
    }

    const context = {
        favourites:userFavourites,
        totalFavourites:userFavourites.length,
        addFavourite:addFavouriteHandler,
        removeFavourite:removeFavouriteHandler,
        itemFavourite:isFavouriteHandler
    };

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}

export default FavouriteContext;