import React from 'react';
import styles from "./Product.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";


const MainPage = () => {

    return (
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.contentMainPage}>
                <Header/>
                <div className={styles.charts}>
                    <div className={styles.pieChart}>
                        <PieChart />
                    </div>
                    <div className={styles.barChart}>
                        <BarChart/>
                    </div>
                    <div className={styles.lineChart}>
                        <LineChart/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MainPage;