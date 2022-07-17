import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/404';
import ProtectedApp from './ProtectedApp'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css';

function App({ signOut, user }) {
  return (
    <Router>
      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/account' element={<ProtectedApp />}/>
          <Route path='*' component={Page404} />
      </Routes>
    </Router>
  );
}

export default App;
