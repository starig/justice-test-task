import React from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import styles from './Product.module.css';
import Item from "../components/Item";
import {useSelector} from "react-redux";

const Products = () => {
    const items = useSelector(state => state.items);
    return <div className={styles.container}>
        <Sidebar/>
        <div className={styles.content}>
            <Header/>
            <div className={styles.table}>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product name</th>
                        <th>Product image</th>
                        <th>Creation date</th>
                        <th>Contributed by</th>
                        <th>Attenuation level</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={styles.emptyRow}></tr>
                    {
                        items.map(item => <Item key={item.id} {...item} />)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>;
};

export default Products;