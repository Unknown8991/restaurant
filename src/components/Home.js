import React from 'react';
import Menu from './Menu';
import Place from './Place';
import YourOrder from './YourOrder';
import SearchMeal from './SearchMeal';
import HistoryOrders from './HistoryOrders';
import SummaryOrder from './SummaryOrder';
import NotificationContent from './NotificationContent';





const Home = (props) => {

// Wyświetlenie wyszukiwanych posiłków
    const arraySearchName = props.meals.filter(item => item.name.toLowerCase().includes(props.searchMeal))
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
            image={element.img}
        />
    ))
// Stała pod placeholder w inpucie
    const placeholderText = 'Odszukaj swoje ulubione danie..'; 
    const NotificationArrayForUser = props.notifications.filter(item => item.clientId === props.clientId)
    // console.log(NotificationArrayForUser.length)
    let counterNotificationUser = NotificationArrayForUser.length;
    return (
        <>
        <div className='logo'>Restaurant</div>
        <div className='profile-box__notification' onClick={props.handleShowNotificationContent}>
            {/* <img className='icons-app' src={notify} alt="" /> */}
            <i className="fa fa-bell-o" aria-hidden="true"></i>

        </div>
        <div className='profile-box__counter'>
            {/* {props.counterNotification} */}
            {counterNotificationUser}
        </div>
        {/* <div className='profile-box' onClick={props.handleProfileSettingActive}>P</div> */}
        {/* Wyswietlenie ustawień */}
        {props.isProfileSettingsActive ? 
        <>
            <div className='profile-box profile-box--column-profile' onClick={props.handleProfileSettingActive}>
                <div>
                    {/* <img className='icons-app' src={profileUser} alt="" /> */}
                    <i className="fa fa-user" aria-hidden="true"></i>

                </div>
                <div onClick={props.handleOpenHistory}>
                    {/* <img className='icons-app' src={history} alt="" /> */}
                    <i className="fa fa-history" aria-hidden="true"></i>

                </div>
                <div onClick={props.handleLogOut}>
                {/* <img className='icons-app__big' src={logout} alt="" /> */}
                <i className="fa fa-power-off" aria-hidden="true"></i>

                </div>
            </div>
            
        </>
            :
            <div className='profile-box' onClick={props.handleProfileSettingActive}>
                {/* <img className='icons-app__big' src={profileUser} alt="" /> */}
                <i className="fa fa-user icons-app__big" aria-hidden="true"></i>

            </div>
        }
        {/* {props.isProfileSettingsActive ? <div className='profile-box__content'>
            <div className='container'> 
                <div className='profile-box__content--text'> {props.activeUserLogin}</div>
                <div onClick={props.handleOpenHistory}>Historia zamówień</div>
            </div>
        </div> : null } */}
        {props.isHistoryActive ?
            <HistoryOrders
                isHistoryActive={props.isHistoryActive}
                orders={props.orders}
                handleCloseHistory={props.handleCloseHistory}
                clientId={props.clientId}
            />
            :
            null
        }
        {/* Wyswietlenie powiadomień */}
        {props.isShowNotification ? 
        <NotificationContent 
            handleCloseNotification = {props.handleCloseNotification}
            counterNotification = {props.counterNotification}
            randomBlikGenerateCode={props.randomBlikGenerateCode}
            notifications={props.notifications}
            clientId={props.clientId}
        />
    
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
            
            <div className={props.isHistoryActive ? 'container opacity-container' : 'container opacity-container__none'}>
                <div className={props.activeSearch ? "search search--active" : "search"} >
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" placeholder={placeholderText}  onClick={props.startSearch}  onChange={props.changeSearch}   />
                    {/* <input type="text" placeholder={placeholderText}    onChange={props.changeSearch}   /> */}
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
                isActiveTablesView={props.isActiveTablesView}
                handleOpenTablesView={props.handleOpenTablesView}
                tables={props.tables}
                handleClosedTablesView={props.handleClosedTablesView}
                handleCheckedTable={props.handleCheckedTable}
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
                orders={props.orders}
                clientId={props.clientId}
                textDateForDelivery={props.textDateForDelivery}
                chooseTable={props.chooseTable}
                notifications={props.notifications}
                textNotification={props.textNotification}
                handleActionNotification={props.handleActionNotification}
                numberHome={props.numberHome}
            /> : null }
                        {props.isSummaryOrder ?
                <SummaryOrder
                    nameClient={props.nameClient}
                    surnameClient={props.surnameClient}
                    phoneNumberClient={props.phoneNumberClient}
                    cityClient={props.cityClient}
                    handleCloseSummary={props.handleCloseSummary}
                    place={props.place}
                    dateForSummary={props.date}
                    timeForSummary={props.time}
                    mealsForCostSummary={props.meals}
                    numberHome={props.numberHome}
                    city={props.city}
                    street={props.street}
                    deliveryTime={props.deliveryTime}
                />
                :
                null
            }
            
        </div>
        </> 
     );
}
 
export default Home;