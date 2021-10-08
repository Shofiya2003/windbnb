import React from 'react'

function Heading(props){
    return(
        <div className="heading">
            <h1 className="heading-country">Stays in {props.country}</h1>
            
            <p className="count">{`${props.count}+ stays`}</p>
            
        </div>
    )
}

export default Heading;