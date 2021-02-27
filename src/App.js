import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditProduct from "./components/EditProduct";
import Header from "./components/Header";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";
import store from "./store";

// Redux

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <div className="container mt-5">
                    <Switch>
                        <Route exact path="/" component={Products} />
                        <Route
                            exact
                            path="/products/new"
                            component={NewProduct}
                        />
                        <Route
                            exact
                            path="/products/edit/:id"
                            component={EditProduct}
                        />
                    </Switch>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
