import React from 'react'
import PropTypes from 'prop-types'

function StyleChoice(props) {
  return (
    <button className='group'>
        <div className="group-hover:border-4 group-hover:border-solid group-hover:border-slate-900 duration-500">
            <img src={props.path} alt="" className="" />
            {/* <i class="fa-solid fa-hand-pointer"></i> */}
        </div>
        <h3 className="flex justify-center font-bold">{props.title}</h3>
    </button>
  )
}

StyleChoice.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
}

StyleChoice.defaultProps = {
    title: PropTypes.string,
}


export default StyleChoice
