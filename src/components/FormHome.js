import React from 'react';
import delivery from '../icons/delivery.png';

const FormHome = (props) => {
    return ( 
        <> 
        {props.isYourOrder ?
                <div className='form-center'>
                <form className="col-10 input-form">
                <input 
                    onChange={props.handleChange} 
                    name="username"  
                    className="input-form__item" 
                    type="text"  
                    placeholder="Imię"
                    value={props.nameClient}
                />
                <input 
                    onChange={props.handleChange} 
                    name="user-surname"  
                    className="input-form__item" 
                    type="text"  
                    placeholder="Nazwisko"
                    value={props.surnameClient}
                />
                <input 
                    onChange={props.handleChange} 
                    name="phone"  
                    className="input-form__item" 
                    type="text"  
                    placeholder="Numer telefonu"
                    value={props.phoneNumberClient}
                />
                <input 
                    onChange={props.handleChange} 
                    name="city"  
                    className="input-form__item" 
                    type="text"  
                    placeholder="Miasto"
                    value={props.cityClient}
                />
                <input 
                    onChange={props.handleChange} 
                    name="street"  
                    className="input-form__item" 
                    type="text"  
                    placeholder="Ulica"
                    value={props.streetClient}
                />
                <input 
                    onChange={props.handleChange} 
                    name="numberHome"  
                    className="input-form__item" 
                    type="text"  
                    placeholder="Numer budynku"
                    value={props.homeClient}
                />
            </form>
        </div>
            :
            null
        }
       
    {props.cityClient === "" ? 
    null
    :
    <div className='delivery-time-container__center'>
        <div className='delivery-time-container col-12 col-md-7'>
            <div className='col-12 delivery-time-container__title'>Oczekiwany czas dostawy</div>
            <div className='col-12 delivery-time-container__content'>
                <div className='col-6 delivery-time-container__left'>
                    <img className='icons-app__delivery' src={delivery} alt="" />
                </div>
                <div className='col-6 delivery-time-text'>
                    <div>
                        {props.textDateForDelivery} 
                    </div>
                    <div>
                        {props.deliveryTime}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        
    }

        </>
     );
}
 
export default FormHome;