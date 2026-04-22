import "./Stian-component.css";
import stianProfil from "../assets/bildeStian.jpg";
import stianProfil from "./assets/bildeStian.jpg";

function Stiancomponent() {
  return (
    <article className="profil-stian-card">
      
      <figure>
        <img src={stianProfil} alt="Stian Hønstvedt" />
      </figure>

      <section>
        <h2>Stian Hønstvedt</h2>
        <p>Bachelorstudium i informasjonssystemer</p>
        <a href="mailto:stianhon@hiof.no">
          stianhon@hiof.no
        </a>
      </section>

    </article>
  );
}

export default Stiancomponent;