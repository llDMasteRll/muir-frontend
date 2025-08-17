import React from 'react';
import styles from '../styles/Home.module.css'; // Assuming you have a CSS module for styles

const Home = () => {
    return (
        <>
            <main className = {`${styles.main} ${styles.container}`}>
                
                <div style = {{marginLeft: '5%', marginTop: '16%'}}>
                    <h2 className = {styles.h2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>

                    <p className = {styles.p}>Quas libero quos, error magni assumenda explicabo est amet pariatur vel eius impedit atque vero</p>
                </div>
                
            </main>
        </>
    );
};

export default Home;