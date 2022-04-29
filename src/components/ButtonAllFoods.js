import React from 'react';

const ButtonAllFoods = (props) => {
    
    return ( 
        <button onClick={props.changeActiveAllFoods} className={props.allFoods ? "col-3 btn-all-foods btn-all-foods--active" :  "col-3 btn-all-foods"}>
            Wszystko
        </button>
     );
}
 
export default ButtonAllFoods;