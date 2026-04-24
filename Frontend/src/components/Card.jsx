function Card ({title, info, description}){
    return (
        <div className="card">
            <h2>{title}</h2>
            <p className="info">{info}</p>
            <p>{description}</p>
            <button>Réserver</button>
        </div>
    );
}
export default Card;