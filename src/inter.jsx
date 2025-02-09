import "./inter.css";
import Papier from "./papier";
function OurInterests(){

    return(
        <div className="theBig">
            <div className="titre">
                <h2>Our interests</h2>
                <p>We can proudly say that what distinguishes us from other scientific clubs is our interests:</p>
            </div>
            <div className="conten">
                <Papier title="Programming" img="src/graphics/svg1.svg"/>
                <Papier title="Design" img="src/graphics/ldesign.svg"/>
                <Papier title="Social Media" img="src/graphics/socia.svg"/>
                <Papier title="Podcasting" img="src/graphics/podcasting.svg"/>
                <Papier title="Public Speaking" img="src/graphics/speak.svg"/>
                <Papier title="Coding" img="src/graphics/lcode.svg"/>
                <Papier title="Gamming" img="src/graphics/play.svg"/>
                <Papier title="Hiking" img="src/graphics/hik.svg"/>

            </div>
            
            
        </div>
        
    )
}

export default OurInterests;