import React,{useState} from 'react';
import Header from './Header'
import ListHotel from './ListHotel';
import stays from './stays.json';

import './styles.css';

function Home(){
    const [city, setCity] = useState("Helsinki");
    const [country,setCountry]=useState("Finland");
    const [countStays,setCount]=useState(12);
    const [adultCount, setAdultCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [counter,setCounter]=useState(0);
    const [stayArr,setStayArr]=useState(stays);
    function selectCity(cityName,countryName){
        setCity(cityName);
        setCountry(countryName);
    }
    function count(sign,type){
        
        if(sign==='+'){
            switch (type) {
                case "Adults":
                    setAdultCount(adultCount+1);
                    
                    break;
                case "Children":
                    setChildrenCount(childrenCount+1);
                    break;
                default:
                    break;
            }
            setCounter(counter+1);
        }else{
            
            switch (type) {

                case "Adults":
                    if(adultCount===0 ) return;
                    setAdultCount(adultCount-1);
                    break;
                case "Children":
                    if(childrenCount===0 ) return;
                    setChildrenCount(childrenCount-1);
                    break;
                default:
                    break;
            }
            if(counter!==0)
                setCounter(counter-1);
        }
        
        
    }

    function filterStays(cityName,totalCount){
            
            const filteredStays=stays.filter(stay=>{
            
                return (stay.city===cityName && stay.maxGuests>=totalCount);
            });
            setStayArr(filteredStays);
            setCount(filteredStays.length)
            console.log(filteredStays);  
    }
    
    return(
        <div>
            <Header filterStays={filterStays} count={countStays} city={city} country={country} counter={counter} adultCount={adultCount} childrenCount={childrenCount} counterFunction={count} selectCity={selectCity}/>
            <ListHotel hotelArr={stayArr}></ListHotel>
            
        </div>
    )
}

export default Home;