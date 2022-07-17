import React, {useEffect, useState} from "react";
import styles from '../styles/ShowQueue.module.css'
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsmobile from '../../src/aws-exports';

Amplify.configure(awsmobile);

function Home() {
  return (
    <div className="App">
        <div className={styles['main-container']}>
            <h1>Jira Queue</h1>
            <h2>Create account</h2>
            <Authenticator>
            {({ signOut, user }) => (
                <main>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
                </main>
            )}
            </Authenticator>
        </div>
    </div>
  );
}

export default Home;
