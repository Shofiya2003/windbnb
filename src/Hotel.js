import React,{useState,useEffect} from 'react';
import StarIcon from '@mui/icons-material/Star';

function Hotel(props){
    const [beds,setBeds]=useState("");

    useEffect(()=>{
        if(props.hotel.beds){
            setBeds(", "+props.hotel.beds+" beds");
        }
        
    },[props.hotel.beds, setBeds])

    return(
        <div>
            <div>
                <img src={props.hotel.photo} className="hotel-image" alt="room"/>
            </div>
            <div className="hotel-desc">
                <div className="flex">
                    {props.hotel.superHost ? <div className="super-host"><p>SUPER HOST</p></div>:null}
                    <div className="hotel-type"><p>{`${props.hotel.type} ${beds}`}</p></div>
                </div>
                
                <div className="star-icon">
                    <span><StarIcon></StarIcon> {props.hotel.rating}</span>
                </div>
                
            </div>
            <div className="title">
                <p>{props.hotel.title}</p>
            </div>
            
        </div>
    )
}

export default Hotel;