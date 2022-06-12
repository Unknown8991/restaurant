import React from 'react';
import TogglePlace from './TogglePlace';
import FormRestaurant from './FormRestaurant';
import FormHome from './FormHome';

const Place = (props) => {


const formPlace = props.place.filter(item => item.isActive);

    const places = props.place.map(place =>(
        <TogglePlace 
            key={place.id}
            id={place.id}
            name={place.place}
            isActive={place.isActive}
            changePlaceActive={props.changePlaceActive}
            image={place.image}
        />
    ))
    return ( 
        <>
            <div className="header">
                Gdzie będziesz spożywał swój posiłek?
            </div>
            <div className='col-md-12 place__center'>
                <div className="col-12 col-md-6 place">
                    {places}
                </div>

            </div>
            <>
                { formPlace[0].id === 1 ? 
                <FormRestaurant 
                    formOrder={props.formOrder} 
                    handleChange={props.handleChange} 
                    handleDateValue={props.handleDateValue}
                    date={props.date}
                    time={props.time}
                    table={props.table}
                    saveForm={props.saveForm}
                    handleSaveForm={props.handleSaveForm}
                    tables={props.tables}
                    isActiveTablesView={props.isActiveTablesView}
                    handleOpenTablesView={props.handleOpenTablesView}
                    handleClosedTablesView={props.handleClosedTablesView}
                    handleCheckedTable={props.handleCheckedTable}
                />
                : 
                <FormHome 
                    formOrder={props.formOrder} 
                    handleChange={props.handleChange}
                    form={props.form}
                    saveForm={props.saveForm}
                    deliveryTime={props.deliveryTime}
                    nameClient={props.nameClient}
                    surnameClient={props.surnameClient}
                    phoneNumberClient={props.phoneNumberClient}
                    cityClient={props.cityClient}
                    streetClient={props.streetClient}
                    homeClient={props.homeClient}
                    textDateForDelivery={props.textDateForDelivery}
                /> }
            </>
            <div className="button-container button-container--center">
                <button className="action-button action-button--revert" onClick={props.handleSaveForm}>
                    {props.saveForm ? "Nie zapisuj":'Zapisz' }
                </button>
            </div>
        </>
     );
}
 
export default Place;