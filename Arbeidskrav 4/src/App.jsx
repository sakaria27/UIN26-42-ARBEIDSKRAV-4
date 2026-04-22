import { useEffect, useState } from "react"
import { client } from "./sanityClient"
import Sakariacomponent from "./components/Sakaria-component"
<<<<<<< Updated upstream
=======
import StefanComponent from "./components/Stefan-component"
import Stiancomponent from "./components/Stian-component"
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
        <StefanComponent />
        <Stiancomponent /> 
>>>>>>> Stashed changes
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