import './App.css';
import FormCuenta from './components/FormCuenta'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  let values = {usuario: "Óscar", correo: "780378@unizar.es", contrasenya: "@#idfa98sfd9"}
  let valuesNull = {usuario: "", correo: "", contrasenya: ""}
  return (
    <>
    <Header />
    <div className="App">
      {/*<Form />
      <hr />
      <Counter />*/}
      <FormCuenta defaults={valuesNull} submitText='Registrarse'/>
      <FormCuenta defaults={values} submitText='Actualizar'/>
    </div>
    <Footer />
    </>
  );
}

export default App;
