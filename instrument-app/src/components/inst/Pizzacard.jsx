function Pizzacard({pizza}) {
    return (
        <div className="music-card">
            <div className="music-img">
                <img src={pizza.imageUrl} alt={pizza.namee}/>
            </div>
            <h3 className="music-name">{pizza.name}</h3>
            <h4 className="music-string">Кол-во струн: {pizza.string}</h4>
            <h4 className="music-ori">Ориентация: {pizza.ori}</h4>
            <h4 className="music-type">Тип: {pizza.type}</h4>
            <h4 className="music-frets">Лады: {pizza.frets}</h4>
            <h3 className="music-price">{pizza.price} tg</h3>
        </div>
    );
}

export default Pizzacard;