import "./ProfilStian.css";
import stianBilde from "./assets/ProfilBilde.jpg";

function ProfilStian() {
  return (
    <article className="ProfilStian">

      <header>
        <h2>Stian Hønstvedt</h2>
      </header>

      <figure>
        <img
          src={stianBilde}
          alt="Profilbilde av Stian Hønstvedt"
        />
      </figure>

      <p>
        <strong>E-post:</strong>{" "}
        <a href="mailto:stianhon@hiof.no">
          stianhon@hiof.no
        </a>
      </p>

      <p>
        <strong>Studie:</strong> Bachelorstudium i informasjonssystemer
      </p>

    </article>
  );
}

export default ProfilStian;