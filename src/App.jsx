// Components
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
