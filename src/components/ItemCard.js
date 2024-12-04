function ItemCard({ imageUrl, name, price, description, onClick}) {
    return (
        <div className="item-card">
            <img src={imageUrl} alt={name} className="item-card__image" />
            <div className="item-card__content">
                <h2 className="item-card__name">{name}</h2>
                <p className="item-card__price">${price}</p>
                <button className="item-card__button" onClick = {onClick}>View Detail</button>
            </div>
        </div>
    );
}

export default ItemCard;