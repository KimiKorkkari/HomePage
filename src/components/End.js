import React, { useState, useEffect } from 'react';
export default function End(props){

    const [lang,setLang] =  useState("Fin")
   
    let content = {
        Fin: {
        title: "Lyhyesti",
        description:
            "38 -vuotias neljän lapsen isä ja aviomies. Asun Jyväskylässä ja entiseltä minältäni konepuuseppä. Puuhommissa kerkesin olemaan mukana 17 vuoden ajan. Noiden vuoden aikana opin alaistaitoja, ja noh, muutenkin olemaan kunnon työntekijä. Sain idean hakea kouluun ohjelmoinnin pariin, kokeiltuani peliohjelmointia, ja huomattuani, kuinka koukuttavaa ohjelmointi onkaan. Nautin kokeilla omia ideoita ja pähkäillä ongelmien edessä. Viime syksynä opiskelin mobiiliohjelmointia, jolloin innostuin React Nativesta. Tälle syksylle olen valinnut React.JS-, Node.JS-, Web-visuallisointi- ja web-käyttöliittymäohjelmointia. Vuoden 2022 lopussa opintopisteitä on kasassa n. 200. Uskoakseni minusta saa oikein hyvän työharjoittelijan frontend- tai fullstack-ohjelmoinnin pariin.",
        github:"Katso töitä GitHub:ssa",
        button:"GitHub",
      
        
        },
        Eng: {
        title: "Briefly",
        description:
            "A 38-year-old father of four and a husband. I live in Jyväskylä and last 17 years I have been in the wood industry. During those years, I learned skills of employee, and well, to be a good worker. I got the idea to apply to school after trying game programming and noticing how addictive programming is. I enjoy trying out my own ideas and facing problems and solving those. Last fall I studied mobile programming with React Native, and I enjoyed it. For that reason, for this autumn, I have chosen React.JS, Node.JS, Web visualization, and Web User Interface Programming. At the end of 2022, I will have 200 credits, So I think I would become a good intern for frontend or full-stack programming.",
        button:"GitHub",
        github:"Check out exercises and projects on GitHub",
       
        }
    };    

    useEffect(() => {

        props.lang === "Fin"
        ? (setLang(content.Fin))
        : (setLang(content.Eng));
      
    }, [props.lang]);

    return (

        <div className='End'>
            
            <p className="Lyhyesti">{lang.title}</p>
            <div className='EndText '>
            <p style={{color:"black", marginBottom:"0.5em", marginTop:"3em"}}>{lang.description}<br/><br/>{lang.github}

            <a href="https://github.com/KimiKorkkari" target="_blank" rel="noreferrer">
                <button className='but2' >{props.mobile ? <div>{lang.button}</div> : <span>{lang.button}</span>}</button>
                
            </a>
            </p>
            </div>
        </div>
        
    )
}