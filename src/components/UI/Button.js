import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const {text} = props;
    return (
        // <button className='' onClick={}>text</button>
        <button type="submit" className="shadow-md px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-600 text-slate-50 duration-500 w-fit mt-2">{text}</button>
    )
}

Button.propTypes = {}

Button.defaultProps = {
    text: "Button",
}

export default Button
