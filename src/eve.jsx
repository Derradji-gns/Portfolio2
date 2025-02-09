import Card from "./card";
import './OurEvents.css';


function OurEvents() {
    return(
        <div className="Fchap">
                      <div className="title"><h2>OUR EVENTS</h2></div>
            <div className="cont">
                <Card value="Tech hub :" desc="Great competition for programmers and IT students" img="src/graphics/techhub.jpg"/>
                <Card value="IT Day :" desc="Event organized by the us featuring tech talks, workshops, and innovative projects." img="src/graphics/it.jpg"/>
                <Card value="Energy Space :" desc="A space for communication and sharing electronic projects between members" img="src/graphics/space.jpg"/>
                <Card value="Speak Up :" desc="Great day to meet new members and help them get to know the school and the club." img="src/graphics/tech-logo.jpg"/>
                <Card value="Teach Me How ?" desc="Workshops and an opportunity to develop club members and acquire new skills." img="src/graphics/lteach.jpg"/>
                <Card value="Hour Of Code :" desc="Teaching members programming languages and problem solving" img="src/graphics/tech-logo.jpg"/>
            </div>
  
        </div>

    )
}
export default OurEvents;