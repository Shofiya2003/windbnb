import React,{useState,useEffect} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import List from './List';
import Counter from './Counter'
function DrawerContent(props){
    const [listIsHidden,setListIsHidden]=useState(false);
    useEffect(()=>{
        console.log();
    })
    return(
        <div class="drawer">
            <div className="main-input-container">
                <div className="main-input-box">
                    <div className="indi-box" onClick={()=>{
                        setListIsHidden(false);
                        props.filterStays(props.city,props.counter);
                    }}>
                        <p className="input-heading">LOCATION</p>
                        <input value={`${props.city},${props.country}`} className="input"/>
                        
                    </div>
                    
                    <div className="indi-box" onClick={()=>{
                        setListIsHidden(true);
                        props.filterStays(props.city,props.counter);
                    }}>
                        <p className="input-heading">GUESTS</p>
                        <input className="input" value={props.counter!==0 ? props.counter:""} placeholder="Add Guests"/>
                    </div>

                    <div className="indi-box" id="indi-box-3" onClick={()=>{
                        props.filterStays(props.city,props.counter);
                    }}>
                        <div className="submit-button" onClick={()=>{
                            props.toggleDrawer(false);
                           

                        }}><p><SearchIcon/> SUBMIT</p></div>
                    </div>
                    
                </div>
            </div>

            <List listIsHidden={listIsHidden} selectCity={props.selectCity} filterStays={props.filterStays} counter={props.counter}></List>
            <div className="counter-container">
                <Counter type={"Adults"} range={"13 or Above"} counterIsHidden={!listIsHidden} counter={props.counter} counterFunction={props.counterFunction} adultCount={props.adultCount} childrenCount={props.childrenCount} filterStays={props.filterStays} city={props.city}></Counter>
                <Counter type={"Children"} range={"2-12"} counterIsHidden={!listIsHidden} counter={props.counter} counterFunction={props.counterFunction} adultCount={props.adultCount} childrenCount={props.childrenCount} filterStays={props.filterStays} city={props.city}></Counter>
            </div>
            
            
        </div>
    )
}

export default DrawerContent;



