import React from 'react';

const Statistics = (props) => {

    const firstValue = props.orders.filter(item => item.status === 0)
    const secondValue = props.orders.filter(item => item.status === 1)
    const thirdValue = props.orders.filter(item => item.status === 2)
    const fourthValue = props.orders.filter(item => item.status === 3)
    const fifthValue = props.orders.filter(item => item.status === 4)
    // console.log(firstValue)
    let all = firstValue.length + secondValue.length + thirdValue.length + fourthValue.length + fifthValue.length

    const first = `${firstValue.length*100}px`;
    const second = `${secondValue.length*100}px`;
    const third = `${thirdValue.length*100}px`;
    const fourth = `${fourthValue.length*100}px`;
    const fifth = `${fifthValue.length*100}px`;

    // console.log(props.orders)
    const dolars = props.orders.map(item => item.price * item.number)
    console.log(dolars)
    const summaryPrice = dolars.reduce((a, b) => a + b, 0)
    console.log(summaryPrice)
    
    
    return ( 
           <>
        
        <div className='statistics-board col-12 '>
            {/* Wszystkie */}
            <div className='statistics-board__item col-12'>
                <div className='statistics-board__item statistics-board__item--center '>
                <div className='statistics-board__header'>Ilość zamówień</div>
                    <div className='statistics-board__circle'>
                        {all}
                    </div>
                </div>
                <div className='statistics-board__item statistics-board__item--center '>
                <div className='statistics-board__header'>Zarobki</div>
                    <div className='statistics-board__circle statistics-board__circle--price'>
                        {summaryPrice} PLN
                    </div>
                </div>
            </div>
            {/* Statystki */}
            <div className='statistics-board__item col-12'>
                <div className='statistics-board__direction'>
                    
                    <div className='statistics-board__text'>Statystyki</div>
                    
                    <div className='statistics-board__column'>
                    
                        <div style={{ 
                            width:`${first}`, 
                            background: "linear-gradient(274deg, rgba(100,194,246,1) 0%, rgba(90,103,214,1) 0%, rgba(72,148,196,1) 100%)", 
                            height: "6px", 
                            borderRadius: '20px',
                            margin: '4px 0px',
                            fontSize:'14px',
                            paddingTop:'2px',
                            fontWeight: '300'
                            }}
                        >
                            Nowy
                        </div>
                        <div className='statistics-board__value'>{firstValue.length}</div>
                    </div>
                    <div className='statistics-board__column'>
                        <div style={{ 
                            width:`${second}`, 
                            background: "linear-gradient(274deg, rgb(240, 237, 95) 0%, rgb(232, 228, 50) 0%, rgb(200, 196, 29) 100%) repeat scroll 0% 0%", 
                            height: "6px", 
                            borderRadius: '20px',
                            margin: '4px 0px',
                            fontSize:'14px',
                            paddingTop:'2px',
                            fontWeight: '300'
                            }}
                        >
                            Realizacja
                        </div>
                        <div className='statistics-board__value'>{secondValue.length}</div>
                    </div>
                    <div className='statistics-board__column'>
                        <div style={{ 
                            width:`${third}`, 
                            background: "linear-gradient(274deg, rgb(100, 194, 246) 0%, rgb(193, 64, 117) 0%, rgb(240, 97, 156) 100%) repeat scroll 0% 0%", 
                            height: "6px", 
                            borderRadius: '20px',
                            margin: '4px 0px',
                            fontSize:'14px',
                            paddingTop:'2px',
                            fontWeight: '300'
                            }}
                        >
                            Przygotowany
                        </div>
                        <div className='statistics-board__value'>{thirdValue.length}</div>
                    </div>
                    <div className='statistics-board__column'>
                        <div style={{ 
                            width:`${fourth}`, 
                            background: "linear-gradient(274deg, rgb(100, 194, 246) 0%, rgb(250, 126, 48) 0%, rgb(236, 138, 78) 100%) repeat scroll 0% 0%", 
                            height: "6px", 
                            borderRadius: '20px',
                            margin: '4px 0px',
                            fontSize:'14px',
                            paddingTop:'2px',
                            fontWeight: '300'
                            }}
                        >
                            Dostawa
                        </div>
                        <div className='statistics-board__value'>{fourthValue.length}</div>
                    </div>
                    <div className='statistics-board__column'>
                        <div style={{ 
                            width:`${fifth}`, 
                            background: "linear-gradient(274deg, rgb(103, 174, 77) 0%, rgb(129, 202, 106) 0%, rgb(116, 168, 100) 100%) repeat scroll 0% 0%", 
                            height: "6px", 
                            borderRadius: '20px',
                            margin: '4px 0px',
                            fontSize:'14px',
                            paddingTop:'2px',
                            fontWeight: '300'
                            }}
                        >
                            Zakończone
                        </div>
                        <div className='statistics-board__value'>{fifthValue.length}</div>
                    </div>

                
                </div>
            </div>
            {/* <div className='statistics-board__item col-12'>
                <div className='statistics-board__item statistics-board__item--center '>
                    <div className='statistics-board__circle'>
                        {all}
                    </div>
                <div>Wszystkie zamówienia</div>
                </div>
            </div> */}
        </div>
        </>
    //     <div className='red-board container'>
    //     {/* <div className='container'> */}
    //         <div className='col-12 red-board__text'>Statystyki</div>
    //         {/* <div className='col-12 red-board__direction'> */}
    //             <div className='red-board__number'>10</div>
    //             <div className='red-board__ball-items'>
    //                 <div className='red-board__ball'></div>
    //                 <div className='red-board__ball'></div>
    //                 <div className='red-board__ball'></div>
    //             </div>
    //             {/* </div> */}
    //     {/* </div> */}
    // </div>

     );
}
 
export default Statistics;