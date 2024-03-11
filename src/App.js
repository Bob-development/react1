import './App.css';
import { Header, Footer, Navigation, Product } from "./components";

import { products } from "./utils/Products";

function App() {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>

      <div className="App">
        {
          products.map(product => (
            <Product title={product.title} description={product.description} price={product.price} />
          ))
        }
      </div>

      <Footer>
        <Navigation></Navigation>
      </Footer>
    </>
  );
}

export default App;