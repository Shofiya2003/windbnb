import React,{useState} from 'react';
import logo from './logo.png';
import SearchIcon from '@mui/icons-material/Search';
import Heading from './Heading';
import DrawerContent from './Drawer'
import Drawer from '@mui/material/Drawer'

function Header(props){
    const [isOpen,setIsOpen]=useState(false);
    const toggleDrawer=(open)=>{
        setIsOpen(open);
        return;
     }
     
    return(
        <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                
                <div className="search-box">
                    <div className="city-name">
                        <input value={`${props.city},${props.country}`} onClick={()=>{
                            toggleDrawer(true);
                        }}/>
                    </div>
                    <div className="guests">
                        <input placeholder="Add guests" value={props.counter!==0 ? props.counter:""} onClick={()=>{
                            toggleDrawer(true);
                        }}/>
                    </div>
                    <div className="search-icon" onClick={()=>{
                            toggleDrawer(true);
                        }}>
                        <SearchIcon></SearchIcon>
                    </div>
                </div>
            </header>
            <Heading country={props.country} count={props.count}></Heading>
           
            <Drawer
                anchor='top'
                open={isOpen}
                onClose={()=>{toggleDrawer(false)}}
            >
                <DrawerContent toggleDrawer={toggleDrawer} filterStays={props.filterStays} city={props.city} country={props.country} counter={props.counter} adultCount={props.adultCount} childrenCount={props.childrenCount} counterFunction={props.counterFunction} selectCity={props.selectCity}/>
            </Drawer>
        </>
    )
}

 export default Header;