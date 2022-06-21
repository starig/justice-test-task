import React from 'react';
import styles from './Header.module.css';
import addImg from './../assets/img/add.png';


const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <div className={styles.headerTitle}>My product</div>
                <div className={styles.headerSubtitle}>Product table</div>
            </div>
            <div>
                <button className={styles.headerButton}>
                    <img src={addImg} alt="Add" className={styles.headerAddImg} />
                        Create a product
                </button>
            </div>
        </div>
    );
};

export default Header;