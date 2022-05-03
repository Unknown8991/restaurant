import React from 'react';


const SummaryOrder = (props) => {
    return ( 
        <div className='summary'>
            <div className='summary__close col-12' onClick={props.handleCloseSummary}>X</div>
            <div className='summary__header'>Podsumowanie zamówienia</div>
            <div className='summary__items container col-12'>
                <div className='summary__text'>
                    Imię: {props.nameClient}
                </div>

                <div className='summary__text'>
                    Nazwisko: {props.surnameClient}
                </div>

                <div className='summary__text'>
                    Numer telefonu: {props.phoneNumberClient}
                </div>

                <div className='summary__text'>
                    Miasto: {props.cityClient}
                </div>
            </div>
        </div>
     );
}
 
export default SummaryOrder;