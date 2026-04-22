import ProfilStian from "./ProfileStian";
import ProfilBilde from "./assets/ProfilBilde.jpg"

function App() {
  return (
    <main>
      <ProfilStian
        navn="Stian Hønstvedt"
        epost="stianhon@hiof.no"
        studie="Bachelorstudium i informasjonssystemer"
        bilde={ProfilBilde}
      />
    </main>
  );
import { useEffect, useState } from "react"
import { client } from "./sanityClient"
import Sakariacomponent from "./components/Sakaria-component"

function App(){
  const [arbeidskrav, SetArbeidskrav] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "arbeidskrav"]`)
      .then((data) => SetArbeidskrav(data))
  }, [])

  return(
    <main>
      <header>
        <h1>UIN26_42</h1>
      </header>
     
      <section>
        <h2>Gruppemedlemmer</h2>
        <Sakariacomponent />
      </section>

      <section>
        <h2>arbeidskrav</h2>
         {arbeidskrav.map((ak) => (
          <article key={ak._id}>
            <h3>{ak.tittel}</h3>
            <p>{ak.beskrivelse}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
  

export default App;
export default App
