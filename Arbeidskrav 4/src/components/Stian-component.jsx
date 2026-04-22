import "./Stian-component.css";

function ProfilStian({ navn, epost, studie, bilde }) {
  return (
    <article className="ProfilStian">

      <header>
        <h2>{navn || "Ukjent navn"}</h2>
      </header>

      <figure className="profil-bilde">
        <img
          src={bilde || "https://via.placeholder.com/150"}
          alt={navn ? `Profilbilde av ${navn}` : "Profilbilde"}
        />
      </figure>

      {epost && (
        <p>
          <strong>E-post:</strong>{" "}
          <a href={`mailto:${epost}`}>
            {epost}
          </a>
        </p>
      )}

      {studie && (
        <p>
          <strong>Studie:</strong> {studie}
        </p>
      )}

    </article>
  );
}

export default ProfilStian;