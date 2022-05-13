import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const {text} = props;
    return (
        // <button className='' onClick={}>text</button>
        <button type="submit" className="shadow-md px-2 rounded-lg bg-slate-800 hover:bg-slate-600 text-slate-50 duration-300">text</button>
    )
}

Button.propTypes = {}

Button.defaultProps = {
    text: "Button",
}

export default Button
