import "./AboutUs.css";
import martin from "../../assets/imgs/Martin.png";
import dani from "../../assets/imgs/Dani.png";
import eze from "../../assets/imgs/Eze.png";
import nico from "../../assets/imgs/Nico.png";
import mauri from "../../assets/imgs/Mauri.png";
import daniFondo from "../../assets/imgs/Dani Fondo.png"

export const AboutUs = () => {
    return (
        <div className="aboutUs">
            <h1 className="title">Meet the team behind it</h1>
            <div className="content" data-aos="fade-up"
            data-aos-duration="3000">
                <a href=""><img src={eze} className="logo" alt="img-eze" /></a>
                <img src={martin} className="logo" alt="img-martin" />
                <img src={dani} className="logo" alt="img-dani" />
                <img src={nico} className="logo" alt="img-nico" />
                <img src={mauri} className="logo" alt="img-mauri" />
            </div>
        </div>
    )
}