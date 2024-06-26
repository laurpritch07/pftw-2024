import PropTypes from "prop-types";
import "./ItemCard.css";
import copy from "../assets/icons/content_copy.svg";
import trash from "../assets/icons/delete.svg";

export default function ItemCard({
    plantName,
    commonName,
    color,
    height,
    hardiness,
    bloom,
    image,
    id,
    deleteFn,
    duplicateFn
}) {
    return (
        <div className="plantCard">
            <div className="cardTitle">{plantName}</div>
            <div className="cardSubTitle">{commonName}</div>
            <div className="cardImg">
                <img src={image} alt={plantName} />
            </div>
            <div className="cardDetails">{bloom}</div>
            <div className="cardDetails">{hardiness}</div>
            <div className="actions">
                <a href="#" onClick={(evt) => {
                    evt.preventDefault();
                    duplicateFn(id)
                }}><img src={copy} />
                </a>
                <a href="#"onClick={(evt) => {
                    evt.preventDefault();
                    deleteFn(id)
                }}><img src={trash} />
                </a>
            </div>
        </div>
    )
}
ItemCard.propTypes = {
    plantName: PropTypes.string,
    commonName : PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.string,
    hardiness: PropTypes.string,
    bloom: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
}