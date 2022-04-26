import React from 'react';

const DisabledToggle = (props) => {
    return ( 
        <div className={props.typeMeal ? 'col-3 header-menu__toggle-vege disabled' : 'col-3 col-3 header-menu__toggle disabled'}>
        <div onClick={props.vege}  className={props.typeMeal ? 'header-menu__toggle--item' : 'header-menu__toggle-vege--item'}>
            {props.typeMeal ? 'v' : 'm'}
        </div>
    </div>
     );
}
 
export default DisabledToggle;