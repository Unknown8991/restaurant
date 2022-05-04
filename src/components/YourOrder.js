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
    // Dodawanie zamówienia do listy zamówień
    const yourOrder = checkedMeals;
    console.log(yourOrder)
    console.log(yourOrder.length)
    // Zmienne dla zamówień
    let name1
    let name2;
    let name3;
    let name4;
    let name5;
    let name6;
    let name7;
    let name8;
    let name9;
    let name10;
    let place = 'W domu'
    let place2 = 'W domu'
    if(yourOrder.length === 1){
         name1 = yourOrder[0].name;
    }
    console.log(name1)
    if(yourOrder.length === 2){
         name2 = yourOrder[1].name;
         console.log(name1)
         console.log(name2)
    }
    if(yourOrder.length === 3){
         name3 = yourOrder[2].name;
    }
    if(yourOrder.length === 4){
         name4 = yourOrder[3].name;
    }
    if(yourOrder.length === 5){
         name5 = yourOrder[4].name;
    }
    if(yourOrder.length === 6){
         name6 = yourOrder[5].name;
    }
    if(yourOrder.length === 7){
         name7 = yourOrder[6].name;
    }
    if(yourOrder.length === 8){
         name8 = yourOrder[7].name;
    }
    if(yourOrder.length === 9){
         name9 = yourOrder[8].name;
    }
    if(yourOrder.length === 10){
         name10 = yourOrder[9].name;
    }
    console.log(name1)

    if(yourOrder.length === 0){
        const object0 = {id: 5, name: name1, place: place,}
        props.orders.push(object0)
    }
    if(yourOrder.length === 1){
    const object1 = {id: 6, name: name2, place: place,}
    props.orders.push(object1)
   }
   if(yourOrder.length === 2){
    const object2 = {id: 7, name: name3, place: place,}
    props.orders.push(object2)
   }
   if(yourOrder.length === 3){
    const object3 = {id: 8, name: name4, place: place,}
    props.orders.push(object3)
   }
   if(yourOrder.length === 4){
    const object4 = {id: 9, name: name5, place: place,}
    props.orders.push(object4)
   }
   if(yourOrder.length === 5){
    const object5 = {id: 10, name: name6, place: place,}
    props.orders.push(object5)
   }
   if(yourOrder.length === 6){
    const object6 = {id: 11, name: name7, place: place,}
    props.orders.push(object6)
   }
   if(yourOrder.length === 7){
    const object7 = {id: 12, name: name8, place: place,}
    props.orders.push(object7)
   }
   if(yourOrder.length === 8){
    const object8 = {id: 13, name: name9, place: place,}
    props.orders.push(object8)
   }
   if(yourOrder.length === 9){
    const object9 = {id: 14, name: name10, place: place,}
    props.orders.push(object9)
   }
    
    // props.orders.push(object0)
    console.log(props.orders)

    // const a3 = orders[2].name;
    // const a4 = orders[3].name;
    // const a5 = orders[4].name;
    // const a6 = orders[5].name;
    // const a7 = orders[6].name;
    // const a8 = orders[7].name;
    // const a9 = orders[8].name;
    // const a10 = orders[10].name;
  
    
    // console.log(props.paymentMethod)
    return ( 
        <div className={props.activeYourOrder ? "your-order your-order--full-screen" : "your-order"} >

                <div className="bar" onClick={props.changeActiveYourOrder}></div>
                <div className="col-12 your-order__text">
                    Twoje zamówienie
                </div>
                    {/* {orders} */}
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
                    handleCloseSummary={props.handleCloseSummary}
                    isSummaryOrder={props.isSummaryOrder}
                    nameClient={props.nameClient}
                    surnameClient={props.surnameClient}
                    phoneNumberClient={props.phoneNumberClient}
                    cityClient={props.cityClient}
                    blikNotifications={props.blikNotifications}
                />
        </div>
     );
}
 
export default YourOrder;