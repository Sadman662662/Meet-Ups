import { useContext } from 'react';
import FavouriteContext from '../../store/Favourites-context';
import Card from '../ui/Card';
import classes from './MeetupItems.module.css';

function MeetupItems(props) {

    const favouriteCtx = useContext(FavouriteContext);

    const itemIsFavourite = favouriteCtx.itemFavourite(props.id);

    function toggleFavouriteStateHandler(params) {
        if (itemIsFavourite) {
            favouriteCtx.removeFavourite(props.id);
        }else{
            favouriteCtx.addFavourite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            })
        }
    }

    return <li className={classes.items}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavouriteStateHandler}>{itemIsFavourite?'Remove from Favourites':'Add To Favourites'}</button>
        </div>
        </Card>
    </li>
}

export default MeetupItems;