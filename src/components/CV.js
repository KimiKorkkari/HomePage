import React, { useState, useEffect } from 'react';
export default function CV(){

    return (

        <div className='Cv'>
        <p style={{ color:"gold",fontSize:"5em",marginTop:"1em"}}>CV</p>
        <h3 style={{paddingTop:"2em", color:"cyan",fontSize:"1.5em"}}>TYÖKOKEMUS</h3>
        <p style={{color:"white",fontSize:"1.3em"}}>Höylääjä <br/> Siparila oy 06/2015-<br/><br/>Höylääjä <br/> Kurikka Timber oy 09/2012 - 06/2015<br/><br/>
            Siparila oy 06/2008 - 09/2012<br/><br/>Höylääjä <br/> Kohiwood Oy 09/2005 - 06/2012<br/>
        </p>
                 
        <h3 style={{paddingTop:"3em", color:"cyan",fontSize:"1.5em"}}>KOULUTUS</h3>
              
        <p style={{color:"white",fontSize:"1.3em"}}>Tieto- ja viestintätekniikka insinööri (amk) 
            <br/> Jyväskylän ammattikorkeakoulu 2019-
            <br/><br/> Prosesstiteollisuuden perustutkinto 
            <br/> Jyväskylän aikuiskoulu valm. 2012
        </p>
        
        <h3 style={{paddingTop:"3em", color:"cyan",fontSize:"1.5em"}}>IT-TAIDOT</h3>
        <p style={{color:"white",fontSize:"1.3em"}}>Linux, Windows, GIT
            
            <br/><br/>Ohjelmoinnin perusteet ja olio-ohjelmointi: Python, C#, C++, PowerShell, Shell, PHP, Kotlin, 
            <br/><br/>Web-Kehitys: React.JS, PHP, JavaScript, HTML, CSS, MySql, Node.JS, 
            <br/><br/>Mobiiliohjelmointi: React Native, MongoDB, Realm
        </p>
        <p style={{paddingTop:"5em",color:"white",fontSize:"1.3em"}}>puh: 0440807837 email: kimmo.s.korhonen@gmail.com</p>       
    </div>
        
    )
}