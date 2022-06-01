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
                    {props.chooseTable !== '' ? 
                        <li className="col-12 order-summary__list-item">
                            <div className="col-9 item-order-name">Rezerwacja stolika ({props.chooseTable}): </div>
                            <div className="col-3 item-order-cost">5 PLN</div>
                        </li>
                        :
                        null
                    }
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
    if(props.chooseTable !== ''){
        total = total + 5
        // return total;
    }


    // Dodawanie zamówienia do listy zamówień
    const yourOrder = checkedMeals;
    // Zmienne dla zamówień
    // nazwa
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
    // ceny 
    let price1;
    let price2;
    let price3;
    let price4;
    let price5;
    let price6;
    let price7;
    let price8;
    let price9;
    let price10;
    // ilość
    let number1
    let number2;
    let number3;
    let number4;
    let number5;
    let number6;
    let number7;
    let number8;
    let number9;
    let number10;
    // imię
    let nameClient1
    let nameClient2;
    let nameClient3;
    let nameClient4;
    let nameClient5;
    let nameClient6;
    let nameClient7;
    let nameClient8;
    let nameClient9;
    let nameClient10;
    // data zamówienia
    let date1
    let date2;
    let date3;
    let date4;
    let date5;
    let date6;
    let date7;
    let date8;
    let date9;
    let date10;

    let dateOfRelease = props.textDateForDelivery
    let place = 'W domu'
    let place2 = 'W domu'
    const orderPlace = props.place.filter(item => item.isActive);
    console.log(orderPlace[0].place)
    // console.log(yourOrder)
    if(yourOrder.length >= 1){
         name1 = yourOrder[0].name;
         number1 = yourOrder[0].number;
         price1 = yourOrder[0].price * number1;
         if(props.chooseTable !== ''){
             price1 += 5;
         }
    }
    // console.log(name1)
    if(yourOrder.length >= 2){
         name2 = yourOrder[1].name;
         number2 = yourOrder[1].number;
         price2 = yourOrder[1].price * number2;
         if(props.chooseTable !== ''){
            price2 += 5;
        }
    }
    if(yourOrder.length >= 3){
         name3 = yourOrder[2].name;
         number3 = yourOrder[2].number;
         price3 = yourOrder[2].price * number3;
         if(props.chooseTable !== ''){
            price3 += 5;
        }
    }
    if(yourOrder.length >= 4){
         name4 = yourOrder[3].name;
         number4 = yourOrder[3].number;
         price4 = yourOrder[3].price * number4;
         if(props.chooseTable !== ''){
            price4 += 5;
        }
    }
    if(yourOrder.length >= 5){
         name5 = yourOrder[4].name;
         number5 = yourOrder[4].number;
         price5 = yourOrder[4].price * number5;
         if(props.chooseTable !== ''){
            price5 += 5;
        }
    }
    if(yourOrder.length >= 6){
         name6 = yourOrder[5].name;
         number6 = yourOrder[5].number;
         price6 = yourOrder[5].price * number6;
         if(props.chooseTable !== ''){
            price6 += 5;
        }
    }
    if(yourOrder.length >= 7){
         name7 = yourOrder[6].name;
         number7 = yourOrder[6].number;
         price7 = yourOrder[6].price * number7;
         if(props.chooseTable !== ''){
            price7 += 5;
        }
    }
    if(yourOrder.length >= 8){
         name8 = yourOrder[7].name;
         number8 = yourOrder[7].number;
         price8 = yourOrder[7].price * number8;
         if(props.chooseTable !== ''){
            price8 += 5;
        }
    }
    if(yourOrder.length >= 9){
         name9 = yourOrder[8].name;
         number9 = yourOrder[8].number;
         price9 = yourOrder[8].price * number9;
         if(props.chooseTable !== ''){
            price9 += 5;
        }
    }
    if(yourOrder.length >= 10){
         name10 = yourOrder[9].name;
         number10 = yourOrder[9].number;
         price10 = yourOrder[9].price * number10;
         if(props.chooseTable !== ''){
            price10 += 5;
        }
    }
    // console.log(name1)
    //  Dodawanie do tablicy obiektów powinno odbywać się po kliknięciu Zapłać w płatności
    if( props.orders.length === 4  && props.isSummaryOrder){
        const object0 = {id: 5, name: name1, place: orderPlace[0].place, clientId: props.clientId, number:number1, price:price1, status:'0', chooseTable: props.chooseTable, dateOfRelease: props.date, timeOfRelease: props.time, city:props.cityClient, street: props.streetClient, numberHome: props.numberHome}
        props.orders.push(object0)
    }
    // if(yourOrder.length === 2 && props.isSummaryOrder)
    if(props.orders.length === 5 && yourOrder.length >= 2 && props.isSummaryOrder){
        const object1 = {id: 6, name: name2, place: orderPlace[0].place, clientId: props.clientId, number:number2, price:price2, status:'0', chooseTable: props.chooseTable, dateOfRelease: props.date, timeOfRelease: props.time, city:props.cityClient, street: props.streetClient, numberHome: props.numberHome}
        props.orders.push(object1)
   }

   if(props.orders.length === 6 && yourOrder.length >= 3 && props.isSummaryOrder){
        const object2 = {id: 7, name: name3, place: orderPlace[0].place, clientId: props.clientId, number:number3, price:price3, status:'0', chooseTable: props.chooseTable, dateOfRelease: props.date, timeOfRelease: props.time, city:props.cityClient, street: props.streetClient, numberHome: props.numberHome}
        props.orders.push(object2)
   }
   if(props.orders.length === 7 && yourOrder.length >= 4 && props.isSummaryOrder){
        const object3 = {id: 8, name: name4, place: orderPlace[0].place, clientId: props.clientId, number:number4, price:price4, status:'0', chooseTable: props.chooseTable, dateOfRelease: props.date, timeOfRelease: props.time, city:props.cityClient, street: props.streetClient, numberHome: props.numberHome}
        props.orders.push(object3)
   }
   if(props.orders.length === 8 && yourOrder.length >= 5 && props.isSummaryOrder){
        const object4 = {id: 9, name: name5, place: orderPlace[0].place, clientId: props.clientId, number:number5, price:price5, status:'0', chooseTable: props.chooseTable, dateOfRelease: props.date, timeOfRelease: props.time, city:props.cityClient, street: props.streetClient, numberHome: props.numberHome}
        props.orders.push(object4)
   }
   if(props.orders.length === 9 && yourOrder.length >= 6 && props.isSummaryOrder){
        const object5 = {id: 10, name: name6, place: orderPlace[0].place, clientId: props.clientId, number:number6, price:price6, status:'0', chooseTable: props.chooseTable, dateOfRelease: props.date, timeOfRelease: props.time, city:props.cityClient, street: props.streetClient, numberHome: props.numberHome}
        props.orders.push(object5)
   }
   if(props.orders.length === 10 && yourOrder.length >= 7 && props.isSummaryOrder){
        const object6 = {id: 11, name: name7, place: orderPlace[0].place, clientId: props.clientId, number:number7, price:price7, status:'0', chooseTable: props.chooseTable, dateOfRelease: props.date, timeOfRelease: props.time, city:props.cityClient, street: props.streetClient, numberHome: props.numberHome}
        props.orders.push(object6)
   }
   if(props.orders.length === 11 && yourOrder.length >= 8 && props.isSummaryOrder){
        const object7 = {id: 12, name: name8, place: orderPlace[0].place, clientId: props.clientId, number:number8, price:price8, status:'0', chooseTable: props.chooseTable, dateOfRelease: props.date, timeOfRelease: props.time, city:props.cityClient, street: props.streetClient, numberHome: props.numberHome}
        props.orders.push(object7)
   }
   if(props.orders.length === 12 && yourOrder.length >= 9 && props.isSummaryOrder){
        const object8 = {id: 13, name: name9, place: orderPlace[0].place, clientId: props.clientId, number:number9, price:price9, status:'0', chooseTable: props.chooseTable, dateOfRelease: props.date, timeOfRelease: props.time, city:props.cityClient, street: props.streetClient, numberHome: props.numberHome}
        props.orders.push(object8)
   }
   if(props.orders.length === 13 && yourOrder.length >= 10 && props.isSummaryOrder){
        const object9 = {id: 14, name: name10, place: orderPlace[0].place, clientId: props.clientId, number:number10, price:price10, status:'0', chooseTable: props.chooseTable, dateOfRelease: props.date, timeOfRelease: props.time, city:props.cityClient, street: props.streetClient, numberHome: props.numberHome}
        props.orders.push(object9)
   }
    
    // props.orders.push(object0)
    // console.log(props.orders)

 
  
    
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
                            <div className="col-12 order-summary__client-info">Numer stolika: {props.chooseTable}</div>
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
                    notifications={props.notifications}
                    textNotification={props.textNotification}
                    handleActionNotification={props.handleActionNotification}
                />
        </div>
     );
}
 
export default YourOrder;