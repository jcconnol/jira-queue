import EditQueue from './pages/EditQueue';
import ShowQueue from './pages/ShowQueue';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<ShowQueue />} />
          <Route path='/edit' element={<EditQueue/>} />
      </Routes>
    </Router>
  );
}

export default App;
