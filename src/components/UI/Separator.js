import React from 'react'
import PropTypes from 'prop-types';

function Separator(props) {
  const {color} = props;
  const finalClasses = "mt-4 mb-4 w-full h-1" + " " + props.color;
  return (
    <div className={finalClasses}></div>
  )
}

Separator.propTypes = {
    color: PropTypes.string,
}


Separator.defaultProps = {
    color: "bg-slate-700",
}

export default Separator