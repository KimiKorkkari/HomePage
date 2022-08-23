import LangQuizVideo from "../images/kielivisa.mp4"

export default function LangQuizRight(){

    return (

        <div>
            <video className="Video" controls >
                <source src={LangQuizVideo} type="video/mp4"/>
            </video>
        </div>
        
    )
}