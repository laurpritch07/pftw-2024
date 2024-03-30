import { useState } from "react";
import PropTypes from "prop-types";
import "./NewPlantForm.css"; 


export function NewPlantForm({addCardFn}) {
    const initialCardSetting = {
        plantName: "",
        commonName: "",
        color: [],
        height: "",
        hardiness: "",
        inGarden: true,
        wishList: false,
        bloom: "",
        image: "",
    };
    const [newCard, setNewCard] = useState(initialCardSetting);
    const [errorObj, setErrorObj] = useState({
        plantName: "",
        image: "",
        bloom: ""
    });

    function validateForm(newCard) {
        let valid = true;
        if(!newCard.plantName) {
            // set error ObjplantName prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    plantName: "This Plant Name field is required."
                }
            });

            valid = false;
        }
        if(!newCard.image) {
            // set image prop to error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    image: "This image field is required."
                }
            });

            valid = false;
        }
        if (!newCard.bloom) {
            //set error message
            setErrorObj((prevErrorObj) => {
                return {
                    ...prevErrorObj,
                    bloom: "This bloom time field is required."
                }
            });

            valid = false;
        }
        console.log(valid)
        return valid;
    }

    function changeHandler(event) {
        console.log(event.target.value);
        if(event.target.name === "color") {
            //figure out what color to add or remove
            const newColor = event.target.id;
            if(newCard.color.includes(newColor)) {
                const filteredArray = newCard.color.filter ((color) => {
                    return color !== new color
                })
                setNewCard((prevCard) => {
                    return {
                        ...prevCard,
                        color:filteredArray
                    }
                })
            } else {
                // we need to add the color
                const addedColor = [...newCard.color, newColor];
                setNewCard((prevCard) => {
                    return {
                        ...prevCard,
                        color: addedColor
                    }
                })
            }
        } else {
            const needsBoolean = ["inGarden", "wishList"];
            const updatedTarget = needsBoolean.includes(event.target.id) ? !! event.target.value : event.target.value;

            setNewCard((prevCard) => {
                return {
                    ...prevCard,
                   [event.target.name]: updatedTarget
                }
            })
        }


    }
    function submitHandler(event) {
        event.preventDefault();
        console.log({ newCard });
        if(validateForm(newCard)) {
            // send card to app
            addCardFn(newCard);
            //reset values
            setNewCard(initialCardSetting)
        }
    }
    return (
        <form className="new-plant-form-wrapper" onSubmit={submitHandler}>
            <fieldset>
                <legend>Plant Details</legend>
                <div className={{"form-group": true,"error": errorObj.plantName}}>
                    <label className="required" htmlFor="plantName">Plant Name</label>
                    <input 
                        type="text" 
                        name="plantName" 
                        id="plant" 
                        value={newCard.plantName}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newCard.plantName) {
                                setErrorObj
                                ((prevErrorObj) => {
                                    return {
                                        ...prevErrorObj,
                                        plantName: "",
                                    }
                                })
                            }
                        }}
                    />
                    {errorObj.plantName && (
                        <>
                            <br />
                            <small
                            className="errorFeedback">
                                {errorObj.plantName}
                            </small>
                        </>
                    )}
                </div>
                <div className={{"form-group": true,"error": errorObj.image}}>
                    <label className="required" htmlFor="image">Image URL</label>
                    <input 
                        type="text" 
                        name="image" 
                        id="image" 
                        value={newCard.image}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newCard.image) {
                                setErrorObj
                                ((prevErrorObj) => {
                                    return {
                                        ...prevErrorObj,
                                        image: "",
                                    }
                                })
                            }
                        }}
                    />
                    {errorObj.image && (
                        <>
                            <br />
                            <small
                            className="errorFeedback">
                                {errorObj.image}
                            </small>
                        </>
                    )}
                </div>
                <div className={{"form-group": true,"error": errorObj.bloom}}>
                    <label className="required"  htmlFor="bloom">Bloom Time</label>
                    <input 
                        type="text" 
                        name="bloom" 
                        id="bloom" 
                        value={newCard.bloom}
                        onChange={changeHandler}
                        onBlur={() => {
                            if(newCard.bloom) {
                                setErrorObj
                                ((prevErrorObj) => {
                                    return {
                                        ...prevErrorObj,
                                        bloom: "",
                                    }
                                })
                            }
                        }}
                    />
                    {errorObj.bloom && (
                        <>
                            <br />
                            <small
                            className="errorFeedback">
                                {errorObj.bloom}
                            </small>
                        </>
                    )}
                </div>
                <fieldset className="checkbox">
                    <legend>Color Identity</legend>
                    <div className="formGroup checkbox-group">
                        <label htmlFor="smoky-pink">Smoky-pink
                        <input 
                            type="checkbox" 
                            name="color" 
                            id="Smoky-pink" 
                            onChange={changeHandler}
                            checked={newCard.color.includes("Smoky-pink")} />  
                        </label>
                        <label htmlFor="purple">Purple
                        <input 
                            type="checkbox" 
                            name="color" 
                            id="purple" 
                            onChange={changeHandler}
                            checked={newCard.color.includes("purple")} />  
                        </label>
                        <label htmlFor="green">Green
                        <input 
                            type="checkbox" 
                            name="color" 
                            id="green" 
                            onChange={changeHandler}
                            checked={newCard.color.includes("green")} />  
                        </label>
                        <label htmlFor="maroon">Maroon
                        <input 
                            type="checkbox" 
                            name="color" 
                            id="maroon" 
                            onChange={changeHandler}
                            checked={newCard.color.includes("maroon")} />  
                        </label>
                        <label htmlFor="white">White
                        <input 
                            type="checkbox" 
                            name="color" 
                            id="white" 
                            onChange={changeHandler}
                            checked={newCard.color.includes("white")} />  
                        </label>
                    </div>
                </fieldset>
            </fieldset>
            <fieldset>
                <legend>Collection Details</legend>
                <div className="form-group"><label 
                htmlFor="inGarden">This plant is in your garden.</label>
                <input 
                    type="checkbox" 
                    name="inGarden" 
                    id="inGarden" 
                    onChange={changeHandler}
                    value={newCard.inGarden}
                    />
                </div>
                <div className="form-group"><label 
                htmlFor="wishList">Add this plant to your wishlist.</label>
                <input 
                    type="checkbox" 
                    name="wishList" 
                    id="wishList" 
                    onChange={changeHandler}
                    value={newCard.wishList}
                    />
                </div>
            </fieldset>
            {/* check to see if this should be plant */}
            <button type="submit" disabled={errorObj.plantName || errorObj.image || errorObj.bloom}>
                Add Plant
            </button>

        </form>
    )
}

NewPlantForm.PropTypes = {
    addCardFn: PropTypes.func.isRequired
}