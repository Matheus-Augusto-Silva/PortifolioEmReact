import { Introducao } from "./components/introducao/Introducao";
import { Sobre } from "./components/sobre/Sobre";
import { Portifolio } from "./components/portifolio/Portifolio";
import { Certificados } from "./components/certificados/Certificados";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return <div style={{backgroundColor: '#111e20',width: '100%'}}>
  <Introducao/> 
  <Sobre/>
  <Portifolio/>
  <Certificados/>
  <Footer/>

  </div>
};

export default App;