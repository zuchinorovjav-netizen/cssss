import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";

function App() { 
    return (
      <div>
          <Header />
          <main>
            <h2> Welcome to my website</h2>
            <Food />
          </main>
          <Footer />
      </div>
    );
}

export default App;