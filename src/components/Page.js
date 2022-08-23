import '../App.css';
import React, { useState, useEffect } from 'react';
import HeaderLeft from "./HeaderLeft.js"
import HeaderRight from "./HeaderRight.js"
import Changer from "./LangChanger.js"
import RetroLeft from "./RetroLeft"
import RetroRight from "./RetroRight"
import QuizLeft from "./QuizLeft"
import QuizRight from "./QuizRight"
import LangQuizLeft from "./LangQuizLeft"
import LangQuizRight from "./LangQuizRight"
import End from "./End"

import CV from "./CV"
import CV_Eng from "./CV_Eng"

export default function Page(props){

  const [lang, setLang] = useState("Fin")

  const changeLang = (lang) => {
    if (lang === "Eng"){
        setLang("Eng")
     
    }else {
        setLang("Fin")
    }
    }
    
    return (
        <div className="App">
 
            <div className='Section'>
                <div className="Right">
                    <div className='changer'>
                    <Changer function={changeLang}/>
                    </div>
                    <HeaderRight />
                </div>
                <div className="Left">
                    <HeaderLeft lang={lang}/>
                </div>
            </div>

            <div className='UpperSpace'>
                <p className='Portfolio'>Portfolio</p>  
            </div>

            <div className='RetroSection' style={{backgroundColor:"white"}}>
              <div className="RetroLeft">
                <RetroLeft lang={lang} />
              </div>
              <div className="RetroRight">
                <RetroRight />
              </div>
            </div>
            

            <div className='QuizSection' style={{backgroundColor:"black"}}>
                <div className="QuizLeft" style={{position:"absolute",textAlign:"center"}}>
                    <QuizLeft/>
                </div>
                <div className="QuizRight">
                    <QuizRight lang={lang}/>
                </div>
            </div>

              <div className='LangQuizSection'>
                <div className='LangQuizLeft'>
                  <LangQuizLeft lang={lang} />
                </div>
                <div className='LangQuizRight'>
                  <LangQuizRight/>
                </div>
              </div>

              <div className='EndSpace'>
              {lang == "Fin" ? <p style={{fontSize:"5em", paddingLeft:"100vh", paddingTop:"5vh", color:"White"}}>Itsestäni</p> : <p style={{fontSize:"5em", paddingLeft:"100vh", paddingTop:"5vh", color:"White"}}>About myself</p>}
                 
              </div>

              <div className='Mobile'>
                <p style={{color:"white",fontSize:"2em"}}>Portfolio</p>
                <RetroRight />
                <QuizLeft/>
                <LangQuizRight/>
              </div>


              <div className='EndSection' >
                <End mobile={props.mobile} lang={lang} />
              </div>

              <div className='Section' style={{backgroundColor:"black", height:"auto"}}>
                {lang == "Fin" ?<CV/> : <CV_Eng/> }
               
              </div>       

       </div>   
      
      );
}