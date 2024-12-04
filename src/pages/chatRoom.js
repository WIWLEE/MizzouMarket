import { useParams, useNavigate} from "react-router-dom";
import "./chatRoom.css"
import VerticalBar from "../components/VerticalBar";

function ChatRoom() {
    const { Chatroom_id, Item_id } = useParams();
    const navigate = useNavigate();


    const transactionItem = (itemId) => {
        fetch(`http://localhost:3001/api/items/transaction/${itemId}`, {
            method: 'PUT',
        })
        .then(response => response.json())
        .then(data => {
            alert('Transaction successful');
            navigate("/");
        })
        .catch(error => {
            alert('Transaction failed');
        });
    };
    
    return (
        <div id="center">
            <VerticalBar />
            <button class="basicButton" onClick={()=>{transactionItem(Item_id)}}>Make a Transaction</button>
        </div>
    );
}

export default ChatRoom;