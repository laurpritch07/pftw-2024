import PropTypes from "prop-types";
export default function Animal ({url, messageFn}) {
    return (
        <>
        <img src={url} />
        <button onClick={() => {
            messageFn("Hi from animal")
        }}>Say Hi</button>
        </>
    )
}

Animal.propTypes = {
    url: PropTypes.string.isRequired,
    messageFn: PropTypes.func
}