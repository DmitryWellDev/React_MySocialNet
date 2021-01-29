import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    login: string
    isFatch: boolean
}

function Header(props: HeaderPropsType) {
    //debugger
    return (<div>
            <header className={styles.header}>
                My Chat
            </header>
            {props.isFatch ? <p className={styles.myLogin}>{props.login}</p>
                : <div><NavLink className={styles.login} to="/login">login</NavLink></div>
            }
        </div>
    );
}


export default Header;
