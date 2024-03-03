import { NavItem } from "./NavItem";
function Camelid({camelidArray}) {
    console.log("camelidArray", camelidArray);

    return (
        <>
            <NavItem label={camelidArray[0].label} desc={camelidArray[0].desc} image={camelidArray[0].image}/>
        </>
    )
}

export default Camelid;