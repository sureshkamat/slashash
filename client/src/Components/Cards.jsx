import axios from 'axios';
import React from 'react';

export const Cards = ({ id, fav = false}) => {
    const handleAdd = () => {
        axios.post(`https://slashbackend.onrender.com/favorites`,{id})
            .then((res) => {
                console.log("Added");
                window.alert("Added to Favorites");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div className="card" style={{ width: '45%' }}>
            <img src={`https://icanhazdadjoke.com/j/${id}.png`} style={{ width: '100%' }} className="card-img-top" alt={id} />
            <div className="card-body">
            {!fav && (
                    <a href="#" className="btn btn-primary" onClick={()=>handleAdd()}>Favorite</a>
                ) }
            </div>
        </div>
    );
};
