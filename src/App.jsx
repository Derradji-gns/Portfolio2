import "tailwindcss";
import "./index.css"
import NavBar from './navbar';
import Header from "./header";
import OurEvents from "./eve";
import Leaders from "./Leade";
import Article from "./article";
import OurInterests from "./inter";
import Footer from "./footer.jsx";

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <OurEvents/>
      <Leaders/>
      <Article/>
      <OurInterests/>
      <Footer/>

    </div>
  )
}

export default App
