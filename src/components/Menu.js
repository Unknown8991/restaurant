import React from 'react';
import MealList from './MealList';
import Toggle from './Toggle';
import ButtonAllFoods from './ButtonAllFoods';
import DisabledToggle from './DisabledToggle';

const Menu = (props) => {
    return ( 
        <>
            <div className="col-12 header-menu">
                <div className="col-4 header-menu__text">Menu</div>
                {/* <div className="col-2 header-menu__toogle">Toogle</div> */}
                <ButtonAllFoods changeActiveAllFoods={props.changeActiveAllFoods} allFoods={props.allFoods}/>
                {props.allFoods ? <DisabledToggle /> : <Toggle meals={props.meals} vege={props.vege} typeMeal={props.typeMeal}/>}
                {/* <Toggle meals={props.meals} vege={props.vege} typeMeal={props.typeMeal}/> */}
            </div>
            <MealList 
                meals={props.meals} 
                typeMeal={props.typeMeal} 
                allFoods={props.allFoods} 
                addNumberMeal={props.addNumberMeal}
                substractNumberMeal={props.substractNumberMeal}
                checkedMeal={props.checkedMeal}
                handleShowInfoAboutMeal={props.handleShowInfoAboutMeal}
                searchMeal={props.searchMeal}
            />
        </>
     );
}
 
export default Menu;