import "../App.css"
import React, { useState, useEffect } from 'react';

export default function HeaderLeft(props){

    const [finOpac, setFinOpac] = useState({opacity:"1"})
    const [engOpac, setEngOpac] = useState({opacity:"0.5"})
    const [lang,setLang] =  useState("Fin")
   
    let content = {
        Fin: {
        title: "Tieto -ja viestintätekniikka",
        description:
            "Terve! Olen Kimmo, neljännen vuoden opiskelija Jyväskylän ammattikorkeakoulusta. Etsin työharjoittelupaikkaa vuoden 2023 alusta",
        oriented: "Mobiili- ja web-kehittäminen",
        info :"#Node.JS #React.JS #ReactNative",
        contact: "Puh: 0440807837  email: kimmo.s.korhonen@gmail.com "
        },
        Eng: {
        title: "Information and communication technologies",
        description:
            "Hi! I'm Kimmo, a fourth-year student at Jyväskylä University of Applied Sciences. I'm looking for an internship from the beginning of 2023",
        oriented: "Mobile and web development",
        info :"#Node.JS #React.JS #ReactNative",
        contact: "Phone: 0440807837  email: kimmo.s.korhonen@gmail.com "
        }
    };    

    useEffect(() => {

        props.lang === "Fin"
        ? (setLang(content.Fin))
        : (setLang(content.Eng));
      
    }, [props.lang]);
    
    return (
        <div className="HeaderLeft">
            
            <div>
                <p style={{color:"gold", fontSize:"1.5em", marginTop:"1.5em"}}>
                    {lang.title}
                </p>
            </div>
            <div className="InfoTeksti ">
                <p style={{color:"white", fontSize:"2.6em", paddingTop:"0.8em" }}>
                {lang.description}
                </p>
            </div>
            <div style={{height:"10vh", marginTop:"2em"}}>
                <p style={{color:"cyan", fontSize:"1.5em" }}>
                {lang.oriented}
                </p>
                <p style={{color:"cyan", fontSize:"1.5em" }}>
                {lang.info}
                </p>
            </div>
            <div>
                <p style={{color:"white", fontSize:"1.3em", marginTop:"1em"}}>
                {lang.contact}
                </p>
            </div>
        </div>  
    )
}