import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateProduct } from "../actions/productsActions";

const EditProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
    });
    const productToEdit = useSelector(state => state.products.productToEdit);
    const error = useSelector(state => state.products.error);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (productToEdit) {
            setProduct(productToEdit);
        }
    }, [productToEdit]);

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: isNaN(+e.target.value)
                ? e.target.value
                : +e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateProduct(product));
        history.push("/");
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center-mb-4 font-weight-bold">
                            Edit Product
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    onChange={handleChange}
                                    value={product.name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="price"
                                    onChange={handleChange}
                                    value={+product.price}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase db-block w-100"
                            >
                                Save Changes
                            </button>
                        </form>
                        {error && (
                            <p className="font-weight-bold alert alert-danger text-center mt-4">
                                There was an error
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
