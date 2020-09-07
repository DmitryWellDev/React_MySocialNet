import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {RootStateType, SitebarElementType} from "../../redux/store";

type SitebarTypes = {
    sitebar: Array<SitebarElementType>
}

function Navbar(props: SitebarTypes) {
    let sitebarElement = props.sitebar.map(elem => <li className={styles.friendsItem}
                                                             id={elem.name}>{elem.name}</li>)

    return (<div className={styles.nav}>
            <nav>
                <div className={styles.item}><NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
                </div>
                <div className={styles.item}><NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
                </div>
                <div className={styles.item}><NavLink to="/news" activeClassName={styles.active}>News</NavLink></div>
                <div className={styles.item}><NavLink to="/music" activeClassName={styles.active}>Music</NavLink></div>
                <div className={styles.item}><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
                </div>
            </nav>
            <div>
                <h3 className={styles.friendsTitle}>Frinds</h3>
                <div className={styles.friendsList}>
                    {sitebarElement}
                </div>
            </div>
        </div>
    );
}


export default Navbar;
