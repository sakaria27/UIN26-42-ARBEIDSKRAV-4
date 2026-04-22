import { useEffect, useState } from "react"
import { client } from "./sanityClient"
import Sakariacomponent from "./components/Sakaria-component"
import StefanComponent from "./components/Stefan-component"
import ProfilStian from "./components/Stian-component"

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
        <StefanComponent />
        <ProfilStian /> 
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
  

export default App