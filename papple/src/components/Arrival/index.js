import React from 'react';
import './arrival.scss'
import {cardData1,cardData2} from '../../assets/data/arrival/data'

const Arrival = () => {
    return (
        <div className="arrival">
         <div className="arrival__container">
             <div className="arrival__container__title">
                 <h2>New Arrivals</h2>
                 </div>
             <div className="arrival__container__items">
                 {cardData1.map((data, key)=> {
                     return (
                     <div className="arrival__container__items__item">
                         <div className="arrival__container__items__item__img">
                             <img src={data.image} alt=""/>
                         </div>
                         <div className="arrival__container__items__item__title">
                             <h3>{data.title}</h3>
                             <span>{data.price}</span>
                             <button>Add to Cart</button>
                         </div>
                     </div>

                 )
                 })}
                 </div>
             <div className="arrival__container__items">
                 {cardData2.map((data, key)=> {
                     return (
                         <div className="arrival__container__items__item">
                             <div className="arrival__container__items__item__img">
                                 <img src={data.image} alt=""/>
                             </div>
                             <div className="arrival__container__items__item__title">
                                 <h3>{data.title}</h3>
                                 <span>{data.price}</span>
                                 <button>Add to Cart</button>
                             </div>
                         </div>

                     )
                 })}
             </div>
         </div>
        </div>
    )
}

export default Arrival;