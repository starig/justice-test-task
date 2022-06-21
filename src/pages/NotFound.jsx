import React from 'react';
import styles from "./Product.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.contentMainPage}>
                <Header/>
                NotFound 404 error
            </div>
        </div>
    );
};

export default NotFound;