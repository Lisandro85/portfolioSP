import { About } from "./components/About/about";
import { Carrusel } from "./components/Carrusel/carrusel";
import { Contact } from "./components/Contact/contact";
import { Header } from "./components/Header/header";
import { Info } from "./components/Info/info";

export default function Home() {
  return (
    <div>
      <Header />
      <Info />
      <Carrusel />
      <About />
      <Contact />
    </div>
  );
}
