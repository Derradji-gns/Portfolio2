import './header.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
function Header( ) {
useEffect(()=>{
    Aos.init({
    })
})
    return(
        <div className="Hparent" style={{backgroundImage: `url(src/graphics/model1.jpg)`}}>
                        <div className="son">
                <h1>IGENERGY Student's CLUB </h1>
                <p>Igenergy Students' Club at ENSTTIC is a student organization focused on technology, innovation, and skill development. It offers activities like coding workshops, chess competitions, and tech events to enhance members' technical and teamwork abilities, creating a dynamic community.</p>
            </div>


        </div>
    )
}
export default Header;