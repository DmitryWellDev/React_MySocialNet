import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {SitebarElementType} from "../../redux/store";

type SitebarTypes = {
    sitebar: Array<SitebarElementType>
}

function Navbar(props: SitebarTypes) {

    return (<div className={styles.nav}>
            <nav className={styles.navList}>
                <div className={styles.item}><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
                </div>
                <div className={styles.item}><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
                </div>
                <div className={styles.item}><NavLink to="/news" activeClassName={styles.active}>News</NavLink></div>
                <div className={styles.item}><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></div>
                <div className={styles.item}><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></div>
                <div className={styles.item}><NavLink to="/users" activeClassName={styles.active}>Users</NavLink></div>
                <div className={styles.item}><NavLink to="/subscriptions" activeClassName={styles.active}>Subscriptions</NavLink></div>
            </nav>
        </div>
    );
}


export default Navbar;
