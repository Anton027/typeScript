import { Header } from "./components/Header/Header";
import { CatalogList } from "./components/CatalogList";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./components/GlobalStyle";
function App() {
  return (
    <>
      
      <Header />
      <Hero />
      <CatalogList />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
