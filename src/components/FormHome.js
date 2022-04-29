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
            placeholder="Imię"
        />
        <input 
            onChange={props.handleChange} 
            name="user-surname"  
            className="input-form__item" 
            type="text"  
            placeholder="Nazwisko"
        />
        <input 
            onChange={props.handleChange} 
            name="phone"  
            className="input-form__item" 
            type="text"  
            placeholder="Numer telefonu"
        />
        <input 
            onChange={props.handleChange} 
            name="city"  
            className="input-form__item" 
            type="text"  
            placeholder="Miasto"
        />
        <input 
            onChange={props.handleChange} 
            name="street"  
            className="input-form__item" 
            type="text"  
            placeholder="Ulica"
        />
        <input 
            onChange={props.handleChange} 
            name="numberHome"  
            className="input-form__item" 
            type="text"  
            placeholder="Numer budynku"
        />
    </form>
    {props.cityClient === "" ? 
    null
    :
    <div className='delivery-time-container col-12'>
        <div className='col-12 delivery-time-container__title'>Oczekiwany czas dostawy</div>
        <div className='col-12 delivery-time-container__content'>
            <div className='col-6'>AUTO</div>
            <div className='col-6 delivery-time-text'>{props.textDateForDelivery}{props.deliveryTime}</div>
        </div>
    </div>
    
        
    }

        </>
     );
}
 
export default FormHome;