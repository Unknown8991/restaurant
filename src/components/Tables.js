import React from 'react';

const Tables = (props) => {
    return ( 
        <div className='col-6'>
            <div className='tables-view__center'>
            {/* {props.tableId} */}
                <div className='table-width'>
                <div className='table-item'>
                    <div className='table-item__number'>

                    {props.tableId}
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Tables;
