import React, { useState, useEffect } from 'react';

export default function Language(props){

    
    const [finOpac, setFinOpac] = useState({opacity:"1"})
    const [engOpac, setEngOpac] = useState({opacity:"0.5"})

    const setOpacity = (lang) => {
     
        if (lang === "Eng"){
            //Eka vaan vaihetaan se lipun tummuus, katotaan myöhemmin se tekstin vaihto
            setFinOpac({opacity:"0.5"})
            setEngOpac({opacity:"1"})
            props.function(lang) 
        }else {
            
            setFinOpac({opacity:"1"})
            setEngOpac({opacity:"0.5"})
            props.function(lang) 
        }
         
    }

    return (

        <div style={{paddingLeft:"1vh"}}>
            <button style={{backgroundColor:"black"}}><img
                    alt="United States"
                    style={engOpac}
                    height={"20vh"}
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" onClick={() => setOpacity("Eng") }/></button>
                
                <button style={{backgroundColor:"black"}}><img
                    alt="Finland"
                    height={"20vh"}
                    style={finOpac}
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FI.svg" onClick={() => setOpacity("Fin") }/></button>
        </div>
        
    )
}