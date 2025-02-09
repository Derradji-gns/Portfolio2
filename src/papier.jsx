import "./papier.css";
import Aos from "aos";
import { useEffect } from "react";
function Papier({title,img}) {
    useEffect(()=>{
        Aos.init()
    })
    return(
        <div data-aos="zoom-in" className="parent">

            <div className="photo" style={{backgroundImage:`url(${img})`}}>

        </div><div className="description">
                <h3>{title}</h3>
            </div>

        </div>

    )
}

export default Papier;