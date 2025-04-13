import React from 'react';
import '../directions.scss'
const Card = ({text, url,describe}) => {
    return (
        <div className='directions__item'  style={{backgroundImage: `url(${url})`}}>
            <div className="directions__description">
            <p style={{fontSize:24}}>{text}</p>   
            <p style={{fontSize:17}}>{describe}</p>

            </div>
        </div>
    );
}

export default Card;
