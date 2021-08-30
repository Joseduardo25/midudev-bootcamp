import './App.css';

const Mensaje = () => {
  return <h1>HOLA MUNDO</h1>
}

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {
 
  return (
    <div className="App">
      <Mensaje/>
      <Mensaje/>
      <Mensaje/>
      <Description/>
    </div>
  );
}

export default App;
