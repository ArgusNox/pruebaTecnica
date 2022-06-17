import './App.css';
import Card from './components/Card';
import Body from './components/Sections/Body';
import Header from './components/Sections/Header';


function App() {
  return (
  <div>
  <Header />
  <Body />
  <Card contenido="gestiona tu licencia medica"/>
  <Card contenido="solicita tu credito social"/>
  <Card contenido="tenemos + de 100 beneficios" />
  <Card contenido="apoyamos a nuestros afiliados sin empleo"/>
  <Card contenido="agenda tu visita a nuestras sucursales"/>
  </div>
);
}


 

export default App;