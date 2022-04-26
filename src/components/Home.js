import React from 'react';
import Menu from './Menu';
import Place from './Place';
import YourOrder from './YourOrder';
import SearchMeal from './SearchMeal';

const Home = (props) => {

// Wyświetlenie wyszukiwanych posiłków
    const arraySearchName = props.meals.filter(item => item.name.includes(props.searchMeal))
    const searchName = arraySearchName.map(element =>(
        <SearchMeal 
            key={element.id}
            id={element.id}
            name={element.name}
            price={element.price}
            description={element.description}
            showInfoMeal={element.showInfoMeal}
            choosedNumberMeal={element.number}
            addNumberMeal={props.addNumberMeal}
            substractNumberMeal={props.substractNumberMeal}
            isChecked={element.isChecked}
            checkedMeal={props.checkedMeal}
            handleShowInfoAboutMeal={props.handleShowInfoAboutMeal}
            activeSearch={props.activeSearch}
            handleShowInfoAboutMealFromSearch={props.handleShowInfoAboutMealFromSearch}
            showInfoFromSearch={element.showInfoFromSearch}
        />
    ))
// Stała pod placeholder w inpucie
    const placeholderText = 'Search'; 

    return ( 
        <div className="home">
            <div className="container">
                <div className={props.activeSearch ? "search search--active" : "search"} >
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" placeholder={placeholderText}  onClick={props.startSearch}  onChange={props.changeSearch}   />
            </div>
                    <div className="row space-top">
                        <div className="col-11 search-items-container">
                            {searchName}
                        </div>
                    </div>
            <Menu 
                meals={props.meals} 
                vege={props.vege} 
                typeMeal={props.typeMeal} 
                changeActiveAllFoods={props.changeActiveAllFoods} 
                allFoods={props.allFoods} 
                addNumberMeal={props.addNumberMeal} 
                checkedMeal={props.checkedMeal}
                substractNumberMeal={props.substractNumberMeal}
                handleShowInfoAboutMeal={props.handleShowInfoAboutMeal}
                searchMeal={props.searchMeal}
            />
            <Place 
                place={props.place} 
                changePlaceActive={props.changePlaceActive} 
                formOrder={props.formOrder} 
                handleChange={props.handleChange} 
                handleDateValue={props.handleDateValue} 
                date={props.date}
                time={props.time}
                table={props.table}
                saveForm={props.saveForm}
                handleSaveForm={props.handleSaveForm}
                deliveryTime={props.deliveryTime}
                nameClient={props.nameClient}
                surnameClient={props.surnameClient}
                phoneNumberClient={props.phoneNumberClient}
                cityClient={props.cityClient}
                streetClient={props.streetClient}
                homeClient={props.homeClient}
                textDateForDelivery={props.textDateForDelivery}
            />
            </div>
            {props.yourOrder ? 
            <YourOrder 
                activeYourOrder={props.activeYourOrder} 
                changeActiveYourOrder={props.changeActiveYourOrder}
                nameClient={props.nameClient}
                surnameClient={props.surnameClient}
                phoneNumberClient={props.phoneNumberClient}
                date={props.date}
                time={props.time}
                meals={props.meals} 
                place={props.place}
                cityClient={props.cityClient}
                streetClient={props.streetClient}
                homeClient={props.homeClient}
                paymentMethod={props.paymentMethod}
                changePayments={props.changePayments}
                handleBlikCode={props.handleBlikCode}
                handleChangeInputBlikCode={props.handleChangeInputBlikCode}
                firstBlikNumber={props.firstBlikNumber}
                secondBlikNumber={props.secondBlikNumber}
                thirdBlikNumber={props.thirdBlikNumber}
                fourthBlikNumber={props.fourthBlikNumber}
                sendBlikCode={props.sendBlikCode}
                randomBlikCode={props.randomBlikCode}
                isActiveBlikCode={props.isActiveBlikCode}
                timerValue={props.timerValue}
                showBlikContent={props.showBlikContent}
                blikResult={props.blikResult}

            /> : null }
            
        </div>
     );
}
 
export default Home;