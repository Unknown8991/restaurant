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
    const placeholderText = 'Odszukaj swoje ulubione danie..'; 

    return (
        <>
        <div className='profile-box__notification' onClick={props.handleShowNotificationContent}>N</div>
        <div className='profile-box__counter'>
            {props.counterNotification}
        </div>
        <div className='profile-box' onClick={props.handleProfileSettingActive}>P</div>
        {/* Wyswietlenie ustawień */}
        {props.isProfileSettingsActive ? <div className='profile-box__content'>
            <div className='container'> 
                <div className='profile-box__content--text'> {props.activeUserLogin}</div>
                <div>Historia zamówień</div>
            </div>
        </div> : null }
        {/* Wyswietlenie powiadomień */}
        {props.isShowNotification ? 
            <div className='profile-box__notification-content'>
                <div className='container'>
                    <div className='row'>
                        <div className='profile-box__counter--text col-10'>Twoje powiadomienia</div>
                        <div className='profile-box__counter--back col-2' onClick={props.handleCloseNotification}>X</div>
                    </div>
                    {props.counterNotification === 0 ? 
                        <>
                            <div className='profile-box__counter--none'>Brak nowych powiadomień</div>
                            {props.randomBlikGenerateCode}
                        </>
                        
                        :
                        null
                    }
                </div>
            </div>
    
        :
            null
        }
        {props.blikNotifications ? 
                    
                    <div className='profile-box__blik'>
                        <div className='col-12 profile-box__blik--back' onClick={props.handleCloseBlikNotification}>X</div>
                        <div className=' col-12'>
                            <div className='col-12 profile-box__blik--text'> Twój numer blik: {props.randomBlikGenerateCode}</div>
                            <div className='col-12 profile-box__blik--center'>
                                <div className='profile-box__blik--timer'>{props.timerValue}</div>
                            </div>
                            {props.timerValue === 0 ? 
                            <>                            
                                <div className='profile-box__blik--text'>Twój kod płatności wygasł</div>
                                <div className='col-12 profile-box__reset-btn--center'>
                                    <button className='profile-box__reset-btn' onClick={props.resetBlikCode}>Resetuj kod</button>
                                </div>
                            </>
                                :
                                null
                            }
                        </div>
                    </div>
            :
            null
        }
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
                handleCloseSummary={props.handleCloseSummary}
                isSummaryOrder={props.isSummaryOrder}
                blikNotifications={props.blikNotifications}
            /> : null }
            
        </div>
        </> 
     );
}
 
export default Home;