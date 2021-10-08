import React,{useEffect} from 'react';
import Hotel from './Hotel';
function ListHotel(props){
    useEffect(()=>{
        console.log(props.hotelArr);
    })
    return(
        <div className="list-hotel">
            {props.hotelArr.map(hotel=>{
                return <Hotel hotel={hotel}></Hotel>
            })}
        </div>
    )
}

export default ListHotel;