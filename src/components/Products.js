import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../actions/productsActions";
import Product from "./Product";

const Products = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.products.loading);
    const products = useSelector(state => state.products.products);
    const error = useSelector(state => state.products.error);

    useEffect(() => {
        dispatch(getProductsAction());
    }, [dispatch]);

    return (
        <>
            <h2 className="text-center my-5">Products List</h2>
            {error && (
                <p className="font-weight-bold alert alert-danger text-center mt-4">
                    There was a mistake, reload the page
                </p>
            )}
            {loading && <p className="text-center">Loading...</p>}
            <table className="table table-stripped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Products;
