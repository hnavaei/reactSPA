import Navbar from "./components/Navbar";
import './css/style.css';
import Home from "./pages/Home";
import BestSeller from "./components/BestSeller";
import ProductsProvider from "./context/ProductsProvider";
import ReducerProvider from "./context/ReducerProvider";

function App() {
    return (
        <ProductsProvider>
            <ReducerProvider>
                <Home/>
            </ReducerProvider>
        </ProductsProvider>
    );
}

export default App;
