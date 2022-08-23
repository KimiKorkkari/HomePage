import "../App.css"
import React, { useState, useEffect } from 'react';
export default function LangQuizRight(props){


    const [lang,setLang] =  useState("Fin")
   
    let content = {
        Fin: {
        title: "Kielivisa",
        description:
            "Tutustuttuani React Nativeen, tein myös tietovisan kaltaisen sovelluksen. Visassa ideana oppia vieraskielen sanoja. Sanoja yhteensä 3000 ja sanojen lausunnan voi kuunnella pelatessa.",
        info :"Toteutus GitHubissa",
        video: "Katso video toteutuksesta ",
      
        },
        Eng: {
        title: "Language Quiz",
        description:
            "In the mobile programming course, I got to know React Native, which I also used to make an app like a quiz. The idea is to learn foreign language words. A total of 3000 words and you can listen to the pronunciation while playing.",
        info :"On GitHub",
        video: "Watch the video ",
     
        }
    };    

    useEffect(() => {

        props.lang === "Fin"
        ? (setLang(content.Fin))
        : (setLang(content.Eng));
      
    }, [props.lang]);

    return (
        <div className="LangQuizText" >
            <p style={{fontSize:"1.5em", fontWeight:"bold"}}> {lang.title}</p>
            <p style={{marginLeft:"0",marginBottom:"-2%", fontSize:"1.4em", paddingTop:"1em"}}>{lang.description}</p>
            <p style={{ fontSize:"1.5em", marginTop:"2.5em"}}><span className="VideoPois" >{lang.info}</span></p>
            <a href="https://github.com/KimiKorkkari/LangQuiz" target="_blank" rel="noreferrer">
                <button className='but'  style={{position:"absolute", marginLeft:"17em", marginTop:"-2em"}}>GitHub</button>
            </a>

            <p style={{fontSize:"1.5em", marginTop:"2em"}}><span className="VideoPois" >{lang.video} {'\u2192'}</span></p>
            
        </div>
        
        
    )
}