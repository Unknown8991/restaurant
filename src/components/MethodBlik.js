import React from 'react';
// import SummaryOrder from './SummaryOrder';
import ActionButton from './ActionButton';
import payment from '../icons/payment.png';

const MethodBlik = (props) => {

    return ( 

        <div className='col-md-12 center-container'>

            <div className="col-12 col-md-6 blik">


            <div className="generate-code-container">
                {/* <div className={props.showBlikContent ? "col-12 popup-blik-code" : "visibility-box" }> */}
                <div className="col-12 container-timer-value">
                    {/* <div className= {props.showBlikContent ? "timer-value":"visibility-box__none"}>{props.timerValue}</div>
                    <div className="containter-blik">
                        <div className={props.showBlikContent ? "blik-text" : "visibility-box__none"}>Twój kod:{props.randomBlikCode}</div>
                    </div> */}
                    {/* { props.timerValue ===5 || props.timerValue === 0 ?   
                                          
                        <div className="blik-icon"   onClick={props.handleBlikCode} >
                            <img src={payment} alt="" />
                        </div>
                        : 
                        <div className="blik-icon--disable"   onClick={props.handleBlikCode} >
                            <img src={payment} alt="" />
                        </div>                   
                    } */}
                    {!props.blikNotifications ?
                        <div className="blik-icon"  onClick={props.handleBlikCode} >
                            <img src={payment} alt="" />
                        </div>
                        :
                        null
                    }
                </div>
                {/* </div>  */}
            </div>

            <div className="header--blik">
                Wprowadź kod blik
            </div>
            {props.blikResult ? 'Płatność zaakceptowana' : null}
            <div className="col-12 code-input">

                <div className="col-1 blik-container">
                    <input onChange={props.handleChangeInputBlikCode} className="blik-input" type="text" maxLength="1" value={props.firstBlikNumber} name="first" id="1" />
                </div>

                <div className="col-1 blik-container">
                    <input onChange={props.handleChangeInputBlikCode} className="blik-input" type="text" maxLength="1" value={props.secondBlikNumber} name="second" id="2" />
                </div>
                <div className="col-1 blik-container">
                    <input onChange={props.handleChangeInputBlikCode} className="blik-input" type="text" maxLength="1" value={props.thirdBlikNumber} name="third" id="3" />
                </div>
                <div className="col-1 blik-container">
                    <input onChange={props.handleChangeInputBlikCode} className="blik-input" type="text" maxLength="1" value={props.fourthBlikNumber} name="fourth" id="4" />
                </div>
            </div>
            <div className="button-container">
                <ActionButton  
                    sendBlikCode={props.sendBlikCode} 
                    blikResult={props.blikResult}
                    blikNotifications={props.blikNotifications}
                />
            </div>
            {/*  loading */}
            {/* <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> */}

            {/* Wyświetlenie podsumowania */}
            {/* Przeniesione do komponentu Home */}
            {/* {props.isSummaryOrder ?
                <SummaryOrder
                    nameClient={props.nameClient}
                    surnameClient={props.surnameClient}
                    phoneNumberClient={props.phoneNumberClient}
                    cityClient={props.cityClient}
                    handleCloseSummary={props.handleCloseSummary}
                />
                :
                null
            } */}

            {/* {props.isSummaryOrder ?
                props.handleActionNotification()
                :
                null
            } */}
        </div>
        </div>


        
        
     );
}
 
export default MethodBlik;