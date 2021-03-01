import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../actions/productsActions";

const Products = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.products.loading);

    useEffect(() => {
        dispatch(getProductsAction());
        console.log("LOOP");
    }, [dispatch]);

    return (
        <>
            <h2 className="text-center my-5">Products List</h2>
            {loading && <p className="text-center">Loading...</p>}
            <table className="table table-stripped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>{/* Show data from the API */}</tbody>
            </table>
        </>
    );
};

export default Products;
