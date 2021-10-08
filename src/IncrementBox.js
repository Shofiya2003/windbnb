import React,{useEffect} from 'react'

export default function IncrementBox(props) {
    useEffect(()=>{
        console.log(props.city+" "+props.counter);
    })
    return (
        
        <div className="increment-box" onClick={()=>{
            props.counterFunction(props.sign,props.type);
            props.filterStays(props.city,props.counter)
        }}>
            <p className="counter-range">{props.sign}</p>
        </div>
    )
}
