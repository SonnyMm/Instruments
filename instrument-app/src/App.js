import "./assets/css/style.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Pizzalist from "./components/inst/Pizzalist";


function App() {
  return (
    <div>
      <Header />
      <Pizzalist/>
      <Footer />
    </div>
  );
}

export default App;
