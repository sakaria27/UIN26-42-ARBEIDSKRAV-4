
import './Stefan-component.css';
import profilbilde from '../assets/profilbilde.png';

function StefanComponent() {
    return (
        <article className="stefan-kort">
            <img src={profilbilde} alt="Stefan" />
            <h2>Stefan Djurinac</h2>
            <p>Bachelorstudie: Digitale medier og design</p>
            <a href="mailto:stefandj@hiof.no">stefandj@hiof.no</a>
        </article>
    ) ;

}

export default StefanComponent;