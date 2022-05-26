import EditQueue from './pages/EditQueue';
import ShowQueue from './pages/ShowQueue';
import Page404 from './pages/404'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<ShowQueue />} />
          {/*<Route exact path='/edit' element={<EditQueue/>} />*/}
          <Route component={Page404} />
      </Routes>
    </Router>
  );
}

export default App;
