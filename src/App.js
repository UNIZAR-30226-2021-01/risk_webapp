import './App.css';
import FormCuenta from './components/FormCuenta'

function App() {

  let values = {usuario: "Óscar", correo: "780378@unizar.es", contrasenya: "@#idfa98sfd9"}
  let valuesNull = {usuario: "", correo: "", contrasenya: ""}
  return (
    <>
    <h1 id="title-small">RISK</h1>
    <div className="App">
      {/*<Form />
      <hr />
      <Counter />*/}
      <FormCuenta defaults={valuesNull} submitText='Registrarse'/>
      <FormCuenta defaults={values} submitText='Actualizar'/>
    </div>
    </>
  );
}

export default App;
