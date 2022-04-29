import React from 'react';
import Meal from './Meal';
import Drink from './Drink';


const MealList = (props) => {

    // const foods = props.meals.map(food => (
    //     <Meal 
    //         key={food.id}
    //         id={food.id}
    //         name={food.name}
    //     />
    // ))
    // console.log(props.allFoods)

    // Wyświetlenie wyszukiwanych posiłków
    // const arrayTexts = props.meals.map(item => item.name)
    // console.log(arrayTexts)
    // console.log(props.searchMeal)
    // const searchText = arrayTexts.filter(element => element.includes(props.searchMeal))
    // console.log(searchText)

    // const arraySearchName = props.meals.filter(item => item.name.includes(props.searchMeal))
    // console.log(arraySearchName)
    // const searchName = arraySearchName.map(element =>(
    //     <SearchMeal 
    //         key={element.id}
    //         id={element.id}
    //         name={element.name}
    //         price={element.price}
    //         description={element.description}
    //         showInfoMeal={element.showInfoMeal}
    //         choosedNumberMeal={element.number}
    //         addNumberMeal={props.addNumberMeal}
    //         substractNumberMeal={props.substractNumberMeal}
    //         isChecked={element.isChecked}
    //         checkedMeal={props.checkedMeal}
    //         handleShowInfoAboutMeal={props.handleShowInfoAboutMeal}
    //     />
    // ))

// Wyswietlenie posiłków
    const foods = props.meals.map(food => (
        <Meal 
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            description={food.description}
            showInfoMeal={food.showInfoMeal}
            choosedNumberMeal={food.number}
            addNumberMeal={props.addNumberMeal}
            substractNumberMeal={props.substractNumberMeal}
            isChecked={food.isChecked}
            checkedMeal={props.checkedMeal}
            handleShowInfoAboutMeal={props.handleShowInfoAboutMeal}
        />
        ))
    // console.log(foods)

    // Wyświetlenie posiłków wegetarianskich
    const veges = props.meals.filter(vege => vege.isVege === true)
    // console.log(veges)
    const vegeFoods = veges.map(vege => (
        <Meal 
            key={vege.id}
            id={vege.id}
            name={vege.name}
            price={vege.price}
            description={vege.description}
            showInfoMeal={vege.showInfoMeal}
            choosedNumberMeal={vege.number}
            addNumberMeal={props.addNumberMeal}
            substractNumberMeal={props.substractNumberMeal}
            isChecked={vege.isChecked}
            checkedMeal={props.checkedMeal}
            handleShowInfoAboutMeal={props.handleShowInfoAboutMeal}
        />
    ))
    // Wyświetlenie posiłków mięsnych
    const meats = props.meals.filter(meat => meat.isVege === false)
    // console.log(meats)
    const meatFoods = meats.map(meatFood => (
        <Meal 
            key={meatFood.id}
            id={meatFood.id}
            name={meatFood.name}
            price={meatFood.price}
            description={meatFood.description}
            showInfoMeal={meatFood.showInfoMeal}
            choosedNumberMeal={meatFood.number}
            addNumberMeal={props.addNumberMeal}
            substractNumberMeal={props.substractNumberMeal}
            isChecked={meatFood.isChecked}
            checkedMeal={props.checkedMeal}
            handleShowInfoAboutMeal={props.handleShowInfoAboutMeal}
        />
    ))
    // console.log(meatFoods)
    
    // Wyświetlenie napoi
    const itemsDrink = props.meals.filter(item => item.type === 'drink');
    const drinks = itemsDrink.map(drink => (
        <Drink
            key={drink.id}
            id={drink.id}
            name={drink.name}
            price={drink.price}
            description={drink.description}
            showInfoMeal={drink.showInfoMeal}
            type={drink.type}
            choosedNumberMeal={drink.number}
            addNumberMeal={props.addNumberMeal}
            substractNumberMeal={props.substractNumberMeal}
            isChecked={drink.isChecked}
            checkedMeal={props.checkedMeal}
            handleShowInfoAboutMeal={props.handleShowInfoAboutMeal}
        />
    ))

//  console.log(props.typeMeal)
    return ( 
        <>
        <div className="meal-list">
            {props.allFoods ? foods : <>{props.typeMeal ? meatFoods : vegeFoods}</>}
            
            {/* {props.typeMeal ? meatFoods : vegeFoods} */}
        </div>
            <div className="header">Coś do picia?</div>
        <div className="meal-list">
            {drinks}
        </div>
        {/* {searchName} */}
        </>
     );
}
 
export default MealList;