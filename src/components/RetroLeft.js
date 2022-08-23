import React, { useState, useEffect } from 'react';

export default function RetroRight(props){

    const [lang,setLang] =  useState("")

    let content = {
        Fin: {
        title: "RetroPeli",
        description:
            "Ohjelmoin pienen pelidemon Unitylla. Se oli opettavaista ja hauskaa. Jonakin päivänä palaan kyllä asiaan. Pääsin säveltämään peliin myös musiikkia - Main Theme, jonka ystäväni Antti Koivistoinen sovitti henkeen sopivaksi.",
        button: "Kokeile tästä"
        
        },
        Eng: {
        title: "Retro game",
        description:
            "I programmed a small game with unity. It was very fun and educational. Someday I'll get back to it. I also got to compose music for the game - Main Theme, which my friend Antti Koivistoinen arranged to suit the spirit.",
        button:"Try it"
        }
    };    

    useEffect(() => {

        props.lang === "Fin"
        ? (setLang(content.Fin))
        : (setLang(content.Eng));
      
    }, [props.lang]);

    return (

        <div className="RetroText">
            <div>
                <p style={{color:"gold", fontSize:"1.5em"}}>
                {lang.title}
                </p>
            </div>
            <div style={{maxWidth:"80vh"}}>
                <p style={{color:"white", fontSize:"1.4em", marginTop:"1em"}}>{lang.description}</p>
              
            </div>
            <a href="https://student.labranet.jamk.fi/~N3031/Retro/" target="_blank" rel="noreferrer">
                <button style={{marginTop:"5vh"}} className="but" >{lang.button} </button>
            </a>
        </div>  
    )
}