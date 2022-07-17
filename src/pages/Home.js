import React, {useEffect, useState} from "react";
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className="App">
        <div className={styles['main-container']}>
            <h1>Jira Queue</h1>
            <h2><a href="/login">Create account</a></h2>
            <h2><a href="/login">Login</a></h2>

        </div>
    </div>
  );
}

export default Home;
