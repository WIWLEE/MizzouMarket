function ChatRoomCard({name, onClick}) {
    return (
        <div className="item-card">
            <div className="item-card__content">
                <h2 className="item-card__name">{name}</h2>
                <br />
                <button className="item-card__button" onClick = {onClick}>Go ChatRoom</button>
            </div>
        </div>
    );
}

export default ChatRoomCard;