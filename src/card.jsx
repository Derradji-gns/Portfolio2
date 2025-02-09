import { useEffect } from 'react';
import './Card.css';
import Aos from 'aos';

function Card({value, desc, img}) {
    useEffect(()=>{
        Aos.init()
    })
    return(
            <div data-aos="flip-left" className="content">
                <div className="pic" style={{backgroundImage:`url(${img})`}}>
                    
                </div>
            <div className="text">
                <h3>{value}</h3>
                <br />
                <p>{desc}</p>
            </div>
            </div>
    )
}
export default Card;