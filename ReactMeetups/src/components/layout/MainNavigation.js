import { Link } from 'react-router-dom'
import { useContext } from 'react';


import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {

    const favoriteCtx = useContext(FavoritesContext)

    return <header className={classes.header}>
        <div className={classes.logo}>React MeetUps</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All MeetUps</Link>
                </li>
                <li>
                    <Link to='/new-meetups'>Add New MeetUps</Link>
                </li>
                <li>
                    <Link to='/favorites'>
                        Favorites 
                        <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;