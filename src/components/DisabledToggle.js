import React from 'react';
import meat from '../icons/meat.png';
import plant from '../icons/green-tea.png';

const DisabledToggle = (props) => {
    return ( 
        <div className={props.typeMeal ? 'col-3 col-md-2 header-menu__toggle-vege disabled' : 'col-3 col-md-2 header-menu__toggle disabled'}>
        <div onClick={props.vege}  className={props.typeMeal ? 'header-menu__toggle--item' : 'header-menu__toggle-vege--item'}>
            {props.typeMeal ?
                    <img className='icons-app' src={meat} alt="" /> 
                    : 
                    <img className='icons-app' src={plant} alt="" />
             }
        </div>
    </div>
     );
}
 
export default DisabledToggle;