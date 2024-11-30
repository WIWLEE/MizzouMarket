import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './pages/ItemList';
// import ItemDetail from './ItemDetail';

function App() {
  return (
    // When we use Route, Routes, they should be wraped by Router (BrowserRouter)
   <Router> 
      <div>
        <p>DB PROJECT</p>
        <Routes>
          <Route path="/" element={<ItemList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
