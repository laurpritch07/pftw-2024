import PropTypes from "prop-types";
export default function Animal ({url, messageFn}) {
    return (
        <>
        <img src={url} />
        </>
    )
}

Animal.propTypes = {
    url: PropTypes.string.isRequired,
    messageFn: PropTypes.func
}