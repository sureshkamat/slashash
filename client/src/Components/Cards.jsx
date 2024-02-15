import React from 'react';

export const Cards = ({id,fav=false}) => {
    return (
        <div className="card" style={{ width: '45%' }}>
            <img src={`https://icanhazdadjoke.com/j/${id}.png`} style={{ width: '100%' }} className="card-img-top" alt={id} />
            <div className="card-body">
                {!fav && <a href="#" className="btn btn-primary">Favorite</a>}
            </div>
        </div>
    );
};
