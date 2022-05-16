import React from 'react';

const Tables = (props) => {
    return ( 
        <div className='col-6'>
            <div className='tables-view__center'>
            {/* {props.tableId} */}

                    <div className={props.table ? 'table-item__number table-item__number--active' : 'table-item__number' } onClick={()=>props.handleCheckedTable(props.tableId)}>
                    
                    {props.tableId}
                    </div>

            </div>
        </div>
     );
}
 
export default Tables;
