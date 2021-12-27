import { useContext } from 'react';
import {Link} from 'react-router-dom';
import FavouriteContext from '../../store/Favourites-context';

import classes from './MainNavigation.module.css'

function MainNavigationLayout(params) {

    const countFavCtx = useContext(FavouriteContext);

    return <header className={classes.header}>
        <div className={classes.logo}>
            MeetUps
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetups'>New Meetupps</Link>
                </li>
                <li>
                    <Link to='/favourites'>Favourites
                    <span className={classes.badge}>{countFavCtx.totalFavourites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigationLayout;