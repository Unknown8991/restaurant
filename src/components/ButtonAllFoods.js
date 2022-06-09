import React from 'react';

const ButtonAllFoods = (props) => {
    
    return ( 
        <button onClick={props.changeActiveAllFoods} className={props.allFoods ? "col-4 btn-all-foods btn-all-foods--active" :  "col-4 btn-all-foods"}>
            Wszystko
        </button>
     );
}
 
export default ButtonAllFoods;