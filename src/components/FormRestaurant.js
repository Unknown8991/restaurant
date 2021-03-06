import React from 'react';
import TablesView from './TablesView';

const FormRestaurant = (props) => {


    return ( 
        <>
        {props.isYourOrder ? 
            <div className='form-center'>
            <form className={props.saveForm ? 'input-form input-form__visibility' : 'col-md-10 col-12 input-form'}>   
                    
                <div className="col-12 header--form">Dane osobiste</div>
                <input 
                    onChange={props.handleChange} 
                    name="username"  
                    className="input-form__item" 
                    type="text"  
                    placeholder="Imię"
                    maxLength="11"
                    value={props.name}
                />
                <input 
                    onChange={props.handleChange} 
                    name="user-surname"  
                    className="input-form__item" 
                    type="text"  
                    placeholder="Nazwisko"
                    value={props.surname}
                />
                <input 
                    onChange={props.handleChange} 
                    name="phone"  
                    className="input-form__item" 
                    type="text"  
                    placeholder="Numer telefonu"
                    maxLength="9"
                    value={props.phone}
                />
                <div className="col-12 header--form">Proszę wybrać datę</div>
                <div className="form-input-date">
                <div className="col-6 col-md-3 form-input-date__item">
                <input 
                    onChange={props.handleDateValue}
                    type="date"
                    name="date"
                    className="col-12 input-form__item-date input-form__item--date"
                    date={props.date}
                    value={props.date}
                />
                {props.date ? null: <div className="col-12 form-input-date__item--text">Pole wymagane</div>}
                </div>
                <div className="col-4 col-md-3 form-input-date__item">
                <input 
                    onChange={props.handleDateValue}
                    type="time"
                    name="time"
                    className="col-12 input-form__item-date input-form__item--date"
                    time={props.time}
                    value={props.time}
                />
                {props.date ? null: <div className="col-12 form-input-date__item--text">Pole wymagane</div>}
                </div>
                </div>
                <div className="col-12 form-info">Liczba dostępnych stolików: {props.table}</div>
                <div className='col-12 place__center'>
                    <div className='action-button action-button--revert' onClick={props.handleOpenTablesView}>Wybierz stolik</div>
                </div>
                {props.isActiveTablesView ? 
                    <TablesView
                        tables={props.tables}
                        handleClosedTablesView={props.handleClosedTablesView}
                        handleCheckedTable={props.handleCheckedTable}
                    />
                    :
                    null
                }
                <div className="col-12 form-info">Brak rezerwacji, może spowodować dłuższy czas oczekiwania na wydanie posiłku.</div>
                <div className="col-12 form-info">Aby anulować rezerwację zadzwoń pod numer: 890 213 412</div>
                <div className="col-12 form-info--reservation">Rezerwacja stolika kosztuje 5 PLN</div>
            </form>
            
        </div>
            :
        null  
        }
        
        {props.saveForm ? <div className="col-8 save-form">Twoje dane zostały zapisane
        <br />
        <div className="cancel-save" onClick={props.handleCancelSaveForm}>Anuluj</div>
        </div> : null}   
        </>
     );
}
 
export default FormRestaurant;