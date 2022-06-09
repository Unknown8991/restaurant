import React from 'react';

const Drink = (props) => {
    return ( 
        <>
        <div className={props.isChecked ? "col-4 meal-list__item meal-list--drinks meal-list__item--active" : "col-4 meal-list__item meal-list--drinks"}>
            <div className="control-drinks col-12">
                <div className={props.isChecked ? "col-7 meal-list__element meal-list__element--column" : "col-7 meal-list__element meal-list__element--column meal-list__element--no-visibility"}>Ilość 
                    <div className="drink-counter">
                        
                        <button className={props.choosedNumberMeal > 1 ? "drink-counter__button drink-counter__button--left" : "drink-counter__button--zero" } onClick={() => props.substractNumberMeal(props.id)}>-</button>
                        <div>{props.choosedNumberMeal}</div>
                        <button className="drink-counter__button drink-counter__button--right" onClick={() => props.addNumberMeal(props.id)}>+</button>

                    </div>
                </div>
                <div className="col-4 check-container">
                    <div className={props.isChecked ? "checked__drink checked--active" : "checked__drink checked--no-active" } onClick={() => props.checkedMeal(props.id)}>
                    <i className="fa fa-check checked-icon-drinks" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            {/* <div className='meal-list__text-drinks'>
                {props.name}
            </div> */}
            <div className='icons-center'>
                <img className='icons-app__drink' src={props.image} alt="" />
            </div>
            <div className="col-12 ribbon-wrapper">
            <div className="col-6 ribbon ribbon--drink">
                <div className="ribbon__text">{props.price} PLN</div>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Drink;