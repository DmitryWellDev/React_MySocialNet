import React from 'react';
import styles from './Header.module.css';


type HeaderPropsType = {
    login: string
}

function Header(props: HeaderPropsType) {
    return (<div>
            <header className={styles.header}>
                Dark Chat
            </header>
            <div className={styles.login}>login</div>
        </div>
    );
}


export default Header;
