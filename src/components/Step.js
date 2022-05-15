import React from 'react'
import PropTypes from 'prop-types'

function Step(props) {
    const {text} = props;
  return (
    <h2 className="font-bold text-xl border-slate-900 border-2 w-fit px-2">{text}</h2>
  )
}

Step.propTypes = {}

export default Step