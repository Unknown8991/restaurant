import React from 'react';


const SummaryOrder = (props) => {
    const activePlace =  props.place.filter(item => item.isActive)
    
        // Cena za zamówienie
        const checkedMeals = props.mealsForCostSummary.filter(item => item.isChecked)
        const totalCost = checkedMeals.map(item => {
            return(
                item.price * item.number
            )
        }) 
        let totalCostSummary = totalCost.reduce((a, b) => a + b, 0)
        if(props.choseTable !== ''){
            totalCostSummary += 5
        }
        // console.log(totalCost)
        // console.log(totalCostSummary)
        // let total = 0;
        // totalCost.forEach(item => {
        //     total += item;
        // }); 
        // if(props.chooseTable !== ''){
        //     total = total + 5
        //     // return total;
        // }
    return ( 
        <div className='summary'>
            {/* <div className='summary__close col-12' onClick={props.handleCloseSummary}>X</div> */}
            <div className='summary__header'>Płatność potwierdzona</div>
            {activePlace[0].place === 'W restauracji' ?
                <div className='summary__items container col-12'>
                    <div className='summary__text'>
                        {props.nameClient} {props.surnameClient} 
                    </div>
        
                    <div className='summary__text'>
                        {totalCostSummary} PLN
                    </div>
        
                    <div className='summary__text'>
                        {props.timeForSummary} {props.dateForSummary}
                    </div>

                    <div className='summary__text'>
                        {props.phoneNumberClient}
                    </div>
                    
                    <div className='summary__text'>
                        {activePlace[0].place}
                    </div>
                    <div className='summary__close ' onClick={props.handleCloseSummary}>Zamknij</div>
                </div>
                :
                null
            }
            {activePlace[0].place === 'W domu' ?
                <div className='summary__items container col-12'>
                    <div className='summary__text'>
                        {props.nameClient} {props.surnameClient} 
                    </div>
                
                    <div className='summary__text'>
                        {totalCostSummary} PLN
                    </div>
                
                    <div className='summary__text'>
                        {props.timeForSummary} {props.dateForSummary}
                    </div>
                    <div className='summary__text'>
                        {activePlace[0].place}
                    </div>
                    <div className='summary__text'>
                        {props.phoneNumberClient}
                    </div>
                    <div className='summary__text'>
                        {props.city}, {props.street} {props.numberHome}
                    </div>
                    <div className='summary__text'>
                        Dostawa - {props.deliveryTime}
                    </div>
                    <div className='summary__close ' onClick={props.handleCloseSummary}>Zamknij</div>
                </div>
            
                :
                null
            }

        </div>
     );
}
 
export default SummaryOrder;