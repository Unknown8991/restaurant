import React from 'react';

const FormRestaurant = (props) => {


    return ( 
        <>
        <form className={props.saveForm ? 'input-form input-form__visibility' : 'col-12 input-form'}>   
                 
            <div className="col-12 header--form">Personal data</div>
            <input 
                onChange={props.handleChange} 
                name="username"  
                className="input-form__item" 
                type="text"  
                placeholder="Name"
                maxLength="11"

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
                maxLength="9"
            />
            <div className="col-12 header--form">Please select a date</div>
            <div className="form-input-date">
            <div className="col-6 form-input-date__item">
            <input 
                onChange={props.handleDateValue}
                type="date"
                name="date"
                className="col-12 input-form__item-date input-form__item--date"
                date={props.date}
            />
            {props.date ? null: <div className="col-12 form-input-date__item--text">Pole wymagane</div>}
            </div>
            <div className="col-4 form-input-date__item">
            <input 
                onChange={props.handleDateValue}
                type="time"
                name="time"
                className="col-12 input-form__item-date input-form__item--date"
                time={props.time}
            />
            {props.date ? null: <div className="col-12 form-input-date__item--text">Pole wymagane</div>}
            </div>
            </div>
            <div className="col-12 form-info">Number of tables available: {props.table}</div>
            <div className="col-12 form-info">To cancel a booking, please call to the number: 890 213 412</div>
            <div className="col-12 form-info--reservation">Table reservation costs 5 PLN</div>
        </form>
        {props.saveForm ? <div className="col-8 save-form">Your data has been saved
        <br />
        <div className="cancel-save" onClick={props.handleSaveForm}>Cancel</div>
        </div> : null}   
        </>
     );
}
 
export default FormRestaurant;