import React from 'react';
import PropTypes from 'prop-types';
import Button from './UI/Button';

function Form(props) {
    const {title, data} = props;
 
    // for (let i = 0; i < data.length; i++) {
    //     data[i] = {...data[i], id: uniqid()};
    // }

    return (
        <div className="">
            <h2 className='text-lg font-semibold'>{title}</h2>
            <form action="" className="">

                {data.map(function(datum) {
                    const {title, placeholder, id} = datum;
                    return (
                        <div className="" key={id}>
                            <label htmlFor={title} className="">{title}: </label>
                            <input type="text" id={title} placeholder={placeholder}/>
                        </div>
                    );
                })}
                
                {/* <Button title={"Add"}/> */}
            </form>
        </div>
    )
}

Form.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
}


Form.defaultProps = {
    title: "Title",
    data: [],
}


export default Form
