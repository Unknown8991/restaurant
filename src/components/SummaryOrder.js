import React from 'react';


const SummaryOrder = (props) => {
    return ( 
        <div className='summary'>
            <div className='summary__close col-12' onClick={props.handleCloseSummary}>X</div>
            <div>
                <div className=''>
                    Imię:{props.nameClient}
                </div>

                <div className=''>
                    Nazwisko:{props.surnameClient}
                </div>

                <div className=''>
                    Numer telefonu{props.phoneNumberClient}
                </div>

                <div className=''>
                    Miasto:{props.cityClient}
                </div>
            </div>
        </div>
     );
}
 
export default SummaryOrder;