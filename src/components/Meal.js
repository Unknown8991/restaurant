import React from 'react';

const Meal = (props) => {
    // console.log(props.meals)
    
    return ( 
        <>
        
        <div className={props.isChecked ? "col-8 col-md-3 meal-list__item meal-list__item--active" : "col-8 col-md-3 meal-list__item"}>
            <div className="controls-meals">

            <div className={props.isChecked ? "col-8 meal-list__element meal-list__element--column" : "col-8 meal-list__element meal-list__element--column meal-list__element--no-visibility" }>Ilość
                <div className="col-8 meal-list__counter">
                    
                    <button className={props.choosedNumberMeal > 1 ? "button-counter button-counter--left button " : "button-counter--zero"} onClick={() => props.substractNumberMeal(props.id)}>-</button>
                    <div>{props.choosedNumberMeal}</div>
                    <button className="button-counter button-counter--right" onClick={() => props.addNumberMeal(props.id)}>+</button>
                </div>
            </div>
            <div className="col-4 check-container check-container--big" onClick={() => props.checkedMeal(props.id)}>{props.isChecked ?
                <div className="checked checked--active">
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                 :
                <div className="checked checked--no-active">
                    <i className="fa fa-check" aria-hidden="true"></i>
                </div> 
                }
            </div>
            </div>
            
        <div className='text-pizza'>{props.name}</div>
        <div className='images-pizza'>
            <img className='images-pizza__item' src={props.image} alt="" />
        </div>
        <div className="col-12 info-section-wrapper">
            <div className="col-2">
                <div className="more-information" onClick={()=> props.handleShowInfoAboutMeal(props.id)}>
                 i
                </div>
            </div>
               {props.showInfoMeal ? 
                <div className="description-wrapper">
                    <div className="wrapper-header-description">
                        <div className="col-8 wrapper-header-description__name">
                            {props.name}
                        </div>
                        <div className="col-4">
                            <div className="wrapper-header-description__back" onClick={()=> props.handleShowInfoAboutMeal(props.id)}> Wróć </div>
                        </div>
                    </div>
                    <div className="col-12 wrapper-header-description__photo">
                        <img className='images-pizza__item' src={props.image} alt="" />
                    </div>
                    <div className="col-12">{props.description}</div>
                </div>
                 :
                 null}
            <div className="col-10 ribbon-wrapper">
                <div className="col-5 ribbon">
                    <div className="ribbon__text">{props.price} PLN</div>
                </div>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default Meal;