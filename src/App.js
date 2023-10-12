import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './home/Home';
import CreateProduct from './product/CreateProduct';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/add' element={<CreateProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
