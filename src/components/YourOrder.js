import React from 'react';
import MethodPayments from './MethodPayments';


const YourOrder = (props) => {

    const activeOrder = props.place.filter(item => item.isActive)
    // Zaznaczone posiłki
    const checkedMeals = props.meals.filter(item => item.isChecked)
    // Lista wybranych posiłków
    const listMeals = checkedMeals.map(item =>{
        return(
            <div key={item.id} className="order-summary__list">
                <li className="col-12 order-summary__list-item">
                    <div className="col-9 item-order-name">{item.number}x {item.name}</div>
                    <div className="col-3 item-order-cost">{item.price * item.number} PLN</div>
                </li>
            </div>
        )
    })
    // Cena za zamówienie
    const totalCost = checkedMeals.map(item => {
        return(
            item.price * item.number
        )
    }) 
    let total = 0;
    totalCost.forEach(item => {
        total += item;
    }); 

    // console.log(props.paymentMethod)
    return ( 
        <div className={props.activeYourOrder ? "your-order your-order--full-screen" : "your-order"} >

                <div className="bar" onClick={props.changeActiveYourOrder}></div>
                <div className="col-12 your-order__text">
                    Twoje zamówienie
                </div>

                {props.activeYourOrder ? <div className="container">

                {/* <div className="header header--summary">Summary</div>
                <div className="col-12 order-summary">
                    <div className="order-summary__text">Your order</div>
                    {listMeals}
                    <div className="divider"></div>
                    <div className="col-12 order-summary__list-item">
                        <div className="col-9 item-order-name">Total</div>
                        <div className="col-3 item-order-cost item-order-cost--total">{total} PLN</div>
                    </div>
                </div>

                    {activeOrder[0].id === 1 ? 
                        <div className="col-12 order-summary">
                        <div className="order-summary__text">Personal details</div>
                            <div className="col-12 order-summary__client-info">Name: {props.nameClient}</div>
                            <div className="col-12 order-summary__client-info">Surname: {props.surnameClient}</div>
                            <div className="col-12 order-summary__client-info">Phone number: {props.phoneNumberClient}</div>
                            <div className="col-12 order-summary__client-info">Hour: {props.time}</div>
                            <div className="col-12 order-summary__client-info">Date reservation: {props.date}</div>
                        </div>
                    :
                    <div className="col-12 order-summary">
                    <div className="order-summary__text">Personal details</div>
                        <div>Name: {props.nameClient}</div>
                        <div>Surname: {props.surnameClient}</div>
                        <div>Phone number: {props.phoneNumberClient}</div>
                        <div>City: {props.cityClient}</div>
                        <div>Street: {props.streetClient}</div>
                        <div>Home number: {props.homeClient}</div>
                    </div>
                    } */}

                    {/* test */}


                    <div className="header header--summary">Podsumowanie</div>
                    <div className="container-your-order-summary">
                

                {activeOrder[0].id === 1 ? 
                        <div className="col-12 top-order-summary">
                        <div className="order-summary__text">Dane osobowe</div>
                            <div className="col-12 order-summary__client-info">Imię: {props.nameClient}</div>
                            <div className="col-12 order-summary__client-info">Nazwisko: {props.surnameClient}</div>
                            <div className="col-12 order-summary__client-info">Numer telefonu: {props.phoneNumberClient}</div>
                            <div className="col-12 order-summary__client-info">Godzina: {props.time}</div>
                            <div className="col-12 order-summary__client-info order-summary--last">Data rezerwacji: {props.date}</div>
                        </div>
                        
                    :
                    <div className="col-12  top-order-summary">
                    <div className="order-summary__text">Dane osobowe</div>
                        <div>Imię: {props.nameClient}</div>
                        <div>Nazwisko: {props.surnameClient}</div>
                        <div>Numer telefonu: {props.phoneNumberClient}</div>
                        <div>Miasto: {props.cityClient}</div>
                        <div>Ulica: {props.streetClient}</div>
                        <div>Numer domu: {props.homeClient}</div>
                    </div>
                    
                    }
                <div className="col-12 bottom-order-summary">
                    <div className="order-summary__text">Twoje zamówienie</div>
                    {listMeals}
                    <div className="divider"></div>
                    <div className="col-12 order-summary__list-item">
                        <div className="col-9 item-order-name">Razem</div>
                        <div className="col-3 item-order-cost item-order-cost--total">{total} PLN</div>
                    </div>
                </div>
                </div>

                {/* <div className="col-12 order-summary">
                    <div className="order-summary__text">Order summary</div>
                    <div className="order-summary__list">
                        <li className="col-12 order-summary__list-item">
                            <div className="col-9 item-order-name">Hamburger Onion</div>
                            <div className="col-3 item-order-cost">13 PLN</div>
                        </li>
                        <li className="col-12 order-summary__list-item">
                            <div className="col-9 item-order-name">Coca cola</div>
                            <div className="col-3 item-order-cost">7 PLN</div>
                        </li>
                        <li className="col-12 order-summary__list-item">
                            <div className="col-9 item-order-name">Delivery</div>
                            <div className="col-3 item-order-cost">10 PLN</div>
                        </li>
                        <div className="divider"></div>
                        <li className="col-12 order-summary__list-item">
                            <div className="col-9 item-order-name">Total</div>
                            <div className="col-3 item-order-cost">30 PLN</div>
                        </li>
                    </div>
                </div> */}

                {/* <div className="col-12 order-summary">
                    <div className="order-summary__text">Personal details</div>
                        <div>Name: {props.nameClient}</div>
                        <div>Surname: {props.surnameClient}</div>
                        <div>Phone number: {props.phoneNumberClient}</div>
                        <div>Hour: {props.time}</div>
                        <div>Date reservation: {props.date}</div>
                </div> */}
                </div> : null}
                <MethodPayments 
                    paymentMethod={props.paymentMethod} 
                    changePayments={props.changePayments} 
                    activeYourOrder={props.activeYourOrder} 
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
                />
        </div>
     );
}
 
export default YourOrder;