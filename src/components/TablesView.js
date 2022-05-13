import React from 'react';
import Tables from './Tables';

const TablesView = (props) => {
    const tablesItem = props.tables.map(table =>(
        <Tables
            key={table.id}
            tableId={table.id}
            table ={table.isChecked}
        />
    ))

    return ( 
        <div className='tables-view container col-11'>
            <div className='tables-view__text'>
                Wybierz dostępny stolik
            </div>
            <div className='tables-view__row row'>
                {tablesItem}
            </div>
            <div>
                <button onClick={props.handleClosedTablesView}>Zamknij</button>
            </div>
        </div>
     );
}
 
export default TablesView;