import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Cards } from './Cards';
export const Favorites = () => {
    const [data, setData] = useState([]);

    const handleData = async () => {
        try {
            const response = await axios.get(`https://slashbackend.onrender.com/favorites`, {
                headers: { Accept: 'application/json' }
            });
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching jokes:', error);
        }
    };
    useEffect(()=>{
        handleData();
    },[])
  return (
    <div className="d-flex flex-wrap justify-content-center m-3 mx-auto" style={{ width: '95%', gap: '10px' }}>
                {data.map((joke, index) => (
                    <Cards id={joke.id} key={index} fav={true} />
                ))}
            </div>
  )
}
