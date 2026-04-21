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
}

export default App;