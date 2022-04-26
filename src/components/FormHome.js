import React from 'react';

const FormHome = (props) => {
    return ( 
        <>        
        <form className="col-12 input-form">
        <input 
            onChange={props.handleChange} 
            name="username"  
            className="input-form__item" 
            type="text"  
            placeholder="Name"
        />
        <input 
            onChange={props.handleChange} 
            name="user-surname"  
            className="input-form__item" 
            type="text"  
            placeholder="Surname"
        />
        <input 
            onChange={props.handleChange} 
            name="phone"  
            className="input-form__item" 
            type="text"  
            placeholder="Phone Number"
        />
        <input 
            onChange={props.handleChange} 
            name="city"  
            className="input-form__item" 
            type="text"  
            placeholder="City"
        />
        <input 
            onChange={props.handleChange} 
            name="street"  
            className="input-form__item" 
            type="text"  
            placeholder="Street"
        />
        <input 
            onChange={props.handleChange} 
            name="numberHome"  
            className="input-form__item" 
            type="text"  
            placeholder="Home number"
        />
    </form>
    {props.cityClient === "" ? 
    null
    :
    <div className='delivery-time-container col-12'>
        <div className='col-12 delivery-time-container__title'>Expected delivery time</div>
        <div className='col-12 delivery-time-container__content'>
            <div className='col-6'>CAR</div>
            <div className='col-6 delivery-time-text'>{props.textDateForDelivery}{props.deliveryTime}</div>
        </div>
    </div>
    
        
    }

        </>
     );
}
 
export default FormHome;