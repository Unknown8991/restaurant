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
                <div className="header header--payments">Payments</div>
                <div className="col-12 payments">
                    {payments}
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
                /> : <MethodAtLocation/>}
            </div> 
        : null }

        </>
     );
}
 
export default MethodPayments;