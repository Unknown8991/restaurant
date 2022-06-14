import React from 'react';
import TogglePayments from './TogglePayments';
import MethodBlik from './MethodBlik';
import MethodAtLocation from './MethodAtLocation';

const MethodPayments = (props) => {
    const formPayments = props.paymentMethod.filter(item => item.isActive)
    // console.log(formPayments)
    const payments = props.paymentMethod.map(method =>(
        <TogglePayments
            key={method.id}
            id={method.id}
            name={method.methods}
            activeMethod={method.isActive}
            changePayments={props.changePayments}
        />
    ))

    return ( 
        <>
        {props.activeYourOrder ? 
            <div className="container">
                <div className="header header--payments">Płatność</div>
                <div className='col-md-12 center-container'>                    
                    <div className="col-12 col-md-6 payments">
                        {payments}
                    </div>
                </div>
                {formPayments[0].id ===1 ? <MethodBlik 
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
                    isSummaryOrder={props.isSummaryOrder}
                    handleCloseSummary={props.handleCloseSummary}
                    nameClient={props.nameClient}
                    surnameClient={props.surnameClient}
                    phoneNumberClient={props.phoneNumberClient}
                    cityClient={props.cityClient}
                    blikNotifications={props.blikNotifications}
                    notifications={props.notifications}
                    textNotification={props.textNotification}
                    handleActionNotification={props.handleActionNotification}
                /> : <MethodAtLocation/>}
            </div> 
        : null }

        </>
     );
}
 
export default MethodPayments;