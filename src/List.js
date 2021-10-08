import React from 'react';
import stays from './stays.json';
import LocationItem from './LocationItem';
function List(props) {
    const style={
        display:"none"
    }
    const cities=new Map();
    
    stays.forEach(stay=>{
        if(!cities.has(stay.city)){
            cities.set(stay.city,stay.country);
        }
    });
    return (
        <div className="location-item-container"  style={props.listIsHidden? style:null}>
           {Array.from(cities.keys()).map(city=>{
               return <LocationItem city={city} country={cities.get(city)} selectCity={props.selectCity} counter={props.counter} filterStays={props.filterStays}/>
           })}
        </div>
    )
}

export default List;
