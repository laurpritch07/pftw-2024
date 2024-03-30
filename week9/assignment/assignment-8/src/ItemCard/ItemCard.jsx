import PropTypes from "prop-types";
import "./ItemCard.css";
import clsx from "clsx";
import copy from "../assets/icons/content_copy.svg";
import trash from "../assets/icons/delete.svg";
import add from "../assets/icons/add.svg";
import flower from "../assets/icons/local_florist.svg";

export default function ItemCard({
    plantName,
    commonName,
    color,
    height,
    hardiness,
    bloom,
    inGarden,
    wishList,
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
            <div className="inGarden">
            {inGarden && <div className="inGarden"> <img src={flower} title="This plant is already in the garden" /></div>}
            {wishList && <div className="wishList"> <img src={add} title="Add this plant to your wishlist" /></div>}
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



            {/* {color => {
                return <div key={color} className={clsx(["stripe", color])} />
            // left off at 51:20
            }} */}
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
    inGarden: PropTypes.bool,
    wishList: PropTypes.bool,
    image: PropTypes.string,
    id: PropTypes.string,
    duplicateFn: PropTypes.func,
    deleteFn: PropTypes.func
}