import Navbar from "../../components/navbar/navbar.jsx";
import Categories from "../../components/categories/categories.jsx";
import HeroBanner from "../../components/herobanner/herobanner.jsx";
import ProductSection from "../../components/productsection/productsection";
import Footer from "../../components/footer/footer.jsx";
function Home() {
  return (
    <>
        <Navbar />
      <Categories/>
          <HeroBanner />
     <ProductSection />
     <Footer/>
    </>
  );
}

export default Home;