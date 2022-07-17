import EditQueue from './pages/EditQueue';
import ShowQueue from './pages/ShowQueue';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';


function App() {
  return (
    <div>
      <Authenticator>
      <Header />
      <Route path='/show' exact element={<ShowQueue />} />
      <Route exact path='/edit' element={<EditQueue/>} />
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
