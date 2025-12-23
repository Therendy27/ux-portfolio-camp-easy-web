import Navbar from "./components/Navbar";
import './App.css'
import SaleGrid from "./components/SaleGrid";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ForYou from "./components/ForYou";
import Footer from "./components/Footer";

function App() {
  

  return (
     <div className="min-h-screen bg-paper  ">
      <Navbar/>
      <main className="pt-24">
        <Hero/>
        <SaleGrid/>
        <Categories/>
        <ForYou/>
        <Footer/>

      </main>
    </div>
  )
}

export default App
