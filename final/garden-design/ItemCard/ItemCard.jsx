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
        <div className="lg:flex gap:10 basis-1/3 flex-1 mx-2">
        <div className="shadow-xl p-10 rounded-xl text-center my-10 max-w-xl mx-auto">
            <div className="text-3xl font-semibold pt-8 pb-2 text-gray-800">{plantName}</div>
            <div className="text-sm pb-4">{commonName}</div>
            <div className="object-cover">
                <img 
                    src={image} 
                    alt={plantName} 
                    className=" mx-auto rounded-full md:w-80 md:h-80 pb-4 mt-10 mb-10"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    />
            </div>
            <div className="text-md py-2 leading-4 text-gray-800">{bloom}</div>
            <div className="text-md py-2 leading-4 pb-8 text-gray-800">{hardiness}</div>
            <div className="text-4xl flex justify-center gap-16 pt-4">
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
        </div>)
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