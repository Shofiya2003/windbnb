import React from 'react'

import IncrementBox from './IncrementBox';
export default function Counter(props) {
    
    
    const style={
        display:"none"
    }

    
    
    return (
        <div className="flex column counter" style={props.counterIsHidden?style:null}>
            <p className="counter-text counter-type">{props.type}</p>
            <p className="counter-text counter-range">Ages {props.range}</p>
            <div className="flex counter-count">
               <IncrementBox sign={"+"} counterFunction={props.counterFunction} type={props.type} filterStays={props.filterStays} city={props.city} counter={props.counter}/>
               <p className="counter-text" >{props.type==="Adults"?props.adultCount:props.childrenCount}</p>
               <IncrementBox sign={"-"} counterFunction={props.counterFunction} type={props.type} filterStays={props.filterStays} city={props.city} counter={props.counter}/>
                
            </div>
        </div>
    )
}


