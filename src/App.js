import Input from "./componentes/Input";
import Boton from "./componentes/Boton";
import {useState} from "react"

function App() {
  const [usuario, setUsuario] =useState()
  const [contraseña, setContraseña]= useState()

   return (
    <div className="container">
      <h2>Desafio estados de los componentes y eventos</h2> 
        <div className="datos">
          <Input setUser={setUsuario} value={usuario} subtitulo="Nombre"/>

          <Input setUser={setContraseña} subtitulo="contraseña" value={contraseña}/>

        {contraseña === "252525" && <Boton text="Ingresar"/>}
        </div>
        
    </div>

  );
}

export default App;
