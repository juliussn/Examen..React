import  React  from "react";

function Card({ title, image }) {
    return (
    <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
    </div>
    );
}
export default Card
