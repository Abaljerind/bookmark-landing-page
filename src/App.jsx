import Downloads from "./components/Downloads";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="xl:mx-auto xl:max-w-[1440px]">
      <NavBar />
      <Hero />
      <Features />
      <Downloads />
      <FAQ />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
