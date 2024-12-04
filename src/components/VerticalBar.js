import { useNavigate } from 'react-router-dom';

function VerticalBar(){

    const navigate = useNavigate();
    return (    
        <div>
            <div id="bar">
                <button id="homeButton" onClick = {()=>{
                        navigate("/");
                     }}>Home</button>
                <button id = "chatButton" onClick={() =>{
                    navigate("/ChatRoomList");
                }}>Chat</button>
                <button id="myPageButton" onClick={()=>{
                    navigate("/myPage");
                }}>MyPage</button>
            </div>
            
        </div>
    );
};


export default VerticalBar;