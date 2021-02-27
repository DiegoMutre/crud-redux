import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditProduct from "./components/EditProduct";
import Header from "./components/Header";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container mt-5">
                <Switch>
                    <Route exact path="/" component={Products} />
                    <Route exact path="/products/new" component={NewProduct} />
                    <Route
                        exact
                        path="/products/edit/:id"
                        component={EditProduct}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
