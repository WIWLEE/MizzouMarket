import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import AddItem from './pages/registerItem';
import ChatRoom from './pages/chatRoom';
import ChatRoomList from './pages/chatRoomList';

function App() {
  return (
    // When we use Route, Routes, they should be wraped by Router (BrowserRouter)
   <Router>
      <div>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/AddItem" element={<AddItem />} />
          <Route path="/ChatRoom/:Chatroom_id/:Item_id" element={<ChatRoom />} />
          <Route path="/ChatRoomList" element={<ChatRoomList />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
