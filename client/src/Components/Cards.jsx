import React from 'react';
import axios from 'axios';

export const Cards = ({ id, fav = false }) => {
    const handleAdd = (id) => {
        axios.post(`http://localhost:8081/favorites`)
            .then((res) => {
                console.log("Added");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className="card" style={{ width: '45%' }}>
            <img src={`https://icanhazdadjoke.com/j/${id}.png`} style={{ width: '100%' }} className="card-img-top" alt={id} />
            <div className="card-body">
                {!fav && <a href="#" className="btn btn-primary" onClick={(id) => handleAdd(id)}>Favorite</a>}
            </div>
        </div>
    );
};
