import React from 'react';
import styles from "../pages/Product.module.css";
import editImg from "../assets/img/edit.png";

const Item = ({
                  id,
                  name,
                  first_brewed,
                  attenuation_level,
                  image_url,
                  contributed_by
              }) => {
    return (
        <tr>
            <th>{id}</th>
            <th>{name}</th>
            <th><img src={image_url} className={styles.itemImg} alt={'beer img'}/></th>
            <th>{first_brewed}</th>
            <th>{contributed_by}</th>
            <th>{attenuation_level}</th>
            <th className={styles.tableButtons}>
                <button className={`${styles.tableBtn} ${styles.sellBtn}`}>Sell</button>
                <button className={`${styles.tableBtn} ${styles.editBtn}`}>
                    <img src={editImg} alt="Edit"/>
                </button>
                <svg className={styles.deleteSvg} width="12" height="12" viewBox="0 0 12 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L1 11" stroke="#D3D5D7" strokeWidth="1.3" strokeLinecap="round"
                          strokeLinejoin="round"></path>
                    <path d="M1 1L11 11" stroke="#D3D5D7" strokeWidth="1.3" strokeLinecap="round"
                          strokeLinejoin="round"></path>
                </svg>
            </th>
        </tr>
    );
};

export default Item;