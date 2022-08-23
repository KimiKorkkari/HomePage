import FirstPic from "../images/Face.jpg"
import Page from "../images/KokoSivu.png"
import React, { useState } from 'react';

export default function Begin(props){

    const [styleFront, SetStyleFront] = useState({height:"85vh",alignSelf:"start",marginTop:"0vh",marginLeft:"0vh"})
    const [styleSize, SetStyleSize] = useState({height:"22vh",marginTop:"40vh",marginLeft:"0vh", position:"absolute", left:"100vh", top:"2vh", opacity:"0.5"})
    const [headerPic, setHeaderPic] =useState(true)
    const [pagePic, setPagePic] =useState(false)

    let counter = 0
    let counter2 = 0
    let counterEnd = 0
   
    let size = 85
    let topmargin = 0
    let leftmargin = 0

    const FirstPicSize = (["190vh",  "205vh","250vh","300vh", "350vh", "400vh", "450vh", "500vh",
                            "600vh",  "1000vh", "1500vh",  "2000vh","2500vh"
                        ])
  
    const FirstMargUp = ([ "-45.5vh","-52vh","-72vh","-94vh","-117vh","-139vh","-162vh","-185vh",
                        "-231vh","-415vh",  "-645vh",    "-877vh","-1110vh"
                        ])
    const FirstMargLeft = ([ "36vh",   "41vh", "52vh", "43vh",  "34vh",  "25vh", "16vh",  "7vh",
                                "-11vh",   "-83vh",  "-173vh",    "-263vh",   "-355vh"
                            ])
    const SecMargUp = (["40vh","38vh","33vh","32vh","31vh","30vh","29vh","28vh","27vh","26vh","25vh","24vh","23vh","22vh","20vh","18vh","16vh","15vh","14vh","12vh","10vh","7vh","4vh","2vh"])

    const SecPicSize = (["30vh","40vh","80vh","85vh","95vh","100vh","110vh","115vh","120vh","130vh","140vh","150vh","160vh","170vh","180vh","195vh","210vh","230vh","240vh","250vh","260vh","280vh","310vh","320vh"])

                                                                         
    let nopeus = 40
    const Zoom = () => {
      

        if (counter2 < 13 ){
            topmargin -= 3
            size += 7
            leftmargin +=2.4
            setTimeout(() => {   
                SetStyleFront({height: (size.toString()+"vh"), marginTop: (topmargin.toString()+"vh"), marginLeft:(leftmargin.toString()+"vh") })
                counter2++
                Zoom()
              }, 40-(counter2*2));
        }
       
        if (counter < 13 && counter2 >= 13){
            if(counter < 14){
                setTimeout(() => {   
                    SetStyleFront({height: FirstPicSize[counter], marginTop:FirstMargUp[counter],marginLeft:FirstMargLeft[counter] })
                    counter++
                    Zoom()
                  }, 20);
            }
            
            if(counter == 12){
                setPagePic(true)
                setTimeout(() => {   
                    counter++
                    Zoom()
                  }, 40);
            }
        }
        if (counter >= 14 && counter < 38) {
            
            setTimeout(() => {   
                setHeaderPic(false)
                if (counter < 38) {
                    SetStyleSize({height:SecPicSize[counterEnd], marginTop:SecMargUp[counterEnd], opacity:"0.7"})
                    Zoom()
                    counter++
                    counterEnd++
                }else if (counter >= 37){
                    setPagePic(false)
                    props.funktio()
                }
              },nopeus-(counterEnd*7));
        }
    }

    return (
        <div style={{textAlign:"center", height:"100vh", overflow:"hidden", gridAutoFlow:"column", backgroundColor:"black", position:"relative"}}>
            {pagePic ?<img style={styleSize} src={Page} alt="logo"/>  : null }
            {headerPic ? <img style={styleFront} src={FirstPic} alt="logo"/>   : null }
            <button className="Nappi" onClick={Zoom} >ENTER</button>
        </div>
        
    )
}
