import React from 'react';
import PropTypes from 'prop-types';
import Button from './UI/Button';

function Form(props) {
    const {title, data} = props;
 
    // for (let i = 0; i < data.length; i++) {
    //     data[i] = {...data[i], id: uniqid()};
    // }

    return (
        <div className="my-6">
            {/* <h2 className='text-lg font-semibold mb-2'>{title}</h2> */}
            <form action="" className="flex flex-col gap-1 max-w-">

                {data.map(function(datum) {
                    const {title, placeholder, id} = datum;
                    return (
                        <div className="flex gap-3 flex-col sm:flex-row" key={id}>
                            <label htmlFor={title} className="py-1 whitespace-nowrap">{title}: </label>
                            <input type="text" id={title} placeholder={placeholder} className="shadow px-2 rounded-sm w-full" />
                        </div>
                    );
                })}
                
                {/* <Button text={"Add"}/> */}
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
