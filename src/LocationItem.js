import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function LocationItem(props){
    return(
        <div className="location-item" onClick={(event)=>{
            props.selectCity(props.city,props.country);
            props.filterStays(props.city,props.counter);
        }}>
            <LocationOnIcon></LocationOnIcon>
            <p>{`${props.city}, ${props.country}`}</p>
        </div>
    )
}

export default LocationItem;