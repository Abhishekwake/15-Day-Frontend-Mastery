function Card({title, description, imageURL})
{
    function handleClick(){
        alert(`Click on ${title}`);
    }
    return (
        <div className="card">
            <img src={imageURL} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={handleClick}>Know More</button>
        </div>
    );
}
export default Card;