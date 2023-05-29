import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from './pages/Home';
// import About from './pages/About';
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navigation from "./Components/Navigation";

const App = () => {
    return (

        <>
            <Router>
                <Navigation />

                <Routes>
                    <Route path='/home' element={<Home />} exact/>
                    {/* <Route path='/about' element={<About />} /> */}
                    <Route path='/products' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                    
                </Routes>
            </Router>
        </>
    )
}

export default App;