import React from 'react';

const Item = ({url, description}) => {
    return (
        <div className='compensations__item'>
            <div className="compensations__icon">
                <img src={url} alt="" />
            </div>
            <p className='compensations__description'>
                {description}
            </p>
        </div>
    );
}

export default Item;
