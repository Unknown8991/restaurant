import React from 'react';

const TogglePlace = (props) => {

    return ( 
        <>
            <div 
                className={ props.isActive ? "col-6 place__active" : "col-6 place--none-active"} onClick={() => props.changePlaceActive(props.id)}>
                    {props.name} 
                    <div>
                        <img className='icons-app__big' src={props.image} alt="" />
                    </div>
            </div>
            
        </>
     );
}
 
export default TogglePlace;