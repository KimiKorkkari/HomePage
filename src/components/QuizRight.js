import "../App.css"
import React, { useState, useEffect } from 'react';
export default function QuizRight(props){

    const [lang,setLang] =  useState("")
   
    let content = {
        Fin: {
        title: "Tietovisa",
        description:
            "Toisen lukuvuoden syksyllä paneuduttiin fullstack-ohjelmointiin. Mikä sen ilmeisempi harjoitustyön aihe kuin perinteinen tietovisa. Ohjelmoinnissa käytin JavaScriptiä ja PHP:ta, sekä MySQL-tietokantaa. Ohjelman avulla voidaan myös hallita käyttäjiä ja lisäillä kysymyksiä. Työ oli erittäin opettavaista, vaikka tuolloin mukana taisi olla enemmän intoa kuin osaamista.",
        info :"Käyttäjätunnus: testi ja Salasana: sala",
        button: "Kokeile tästä"
        },
        Eng: {
        title: "Quiz",
        description:
            "I programmed the traditional quiz with javascript and php. I used MySQL as the database. On the backend side, you can add questions to the quiz and manage users. The work was very instructive. Although, at that time, I think I had more enthusiasm than competence.",
        info :"user: testi and password: sala",
        button: "Try it"
        }
    };    

    useEffect(() => {

        props.lang === "Fin"
        ? (setLang(content.Fin))
        : (setLang(content.Eng));
      
    }, [props.lang]);

    return (

        <div className="QuizRightText">
            <p style={{ fontSize:"1.5em", fontWeight:"bold", marginTop:"1.5em"}}>{lang.title}</p>
            <p style={{marginLeft:"0",marginBottom:"-2%", fontSize:"1.4em", paddingTop:"1em"}}>{lang.description}
            <br/><br/><span className="SalaSana" style={{fontSize:"0.75em"}}>{lang.info}</span></p>
            
            <a href="https://student.labranet.jamk.fi/~N3031/web-ohjelmointi-harkka/main.php" target="_blank" rel="noreferrer">
            <button className='but' style={{marginLeft:"70%", paddingTop:"1em", marginTop:"-0.8em"}}>{lang.button}</button>
            </a>
        </div>
        
    )
}