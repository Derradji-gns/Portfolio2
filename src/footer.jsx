import '/src/footer.css';
function Footer() {
    return(
        <div className="main">
            <div className='wf'>          
                <div className="includ">
                    <h1>JOIN IGENERGY NOW !</h1>
                    <p>It's height time for you guys to join the Egenergy family to gain new skills and meet great people. All what you have to do is scan the code Bar here and start an amazing advanture with us </p>
                </div>
             <div className="cusin">
                <div className="graph"><img src='src/graphics/codebar.jpg'></img></div>
             </div>

        </div>
            <div className="foot">
                <div className='under'> </div>
                <div className="bottom">
                    <div className='logo'></div>
                    <div className="icons">
                        <a href='https://www.linkedin.com/company/igenergy-club/'><img src="src/graphics/linkedin (1).svg" alt="" /></a>
                       <a href='https://www.facebook.com/share/1A6SbR3xTz/'><img src="src/graphics/facebook.svg" alt="" /></a>
                        <a href='https://www.instagram.com/igenergy.club?igsh=dXR2YjBoMzdhZnJh'><img src="src/graphics/instagram.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        


        </div>
    )
}
export default Footer;