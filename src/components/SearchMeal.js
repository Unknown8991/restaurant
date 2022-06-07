import React from 'react';

const SearchMeal = (props) => {
    return ( 
        // warunek
        <>
        {props.activeSearch ?
        
        <div className="search-box">
        <div className="items-search">
            <div className="col-3 items-search--center">
                <img className="col-9 items-search__image" src={props.image} alt="" />
            </div>
            <div className="col-5 items-search__name">
                {props.id}.{props.name}
            </div>

            {/* info */}
            <div className="col-2 search-more-info-container">
                <div className="more-information more-information--search-item" onClick={()=> props.handleShowInfoAboutMealFromSearch(props.id)}>
                 i
                </div>
            </div>
            

            {/* check */}
            <div className="col-2 check-container check-container--search" onClick={() => props.checkedMeal(props.id)}>
                {props.isChecked ?
                    <div className="checked checked--active">
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    :
                    <div className="checked checked--no-active">
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div> 
                }
            </div>

        </div>
        <div className="search-info-description">
            {props.showInfoFromSearch ? <div className="search-info-description__text">
                {props.description}
            </div>:
            null}
            </div>
        </div>
        :
        null
    }
        </>
     );
}
 
export default SearchMeal;