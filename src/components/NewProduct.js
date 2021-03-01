import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewProductAction } from "../actions/productsActions";

const NewProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    // *  To be able to execute the actions
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        if (name.trim() === "" || price <= 0) {
            return;
        }
        // *! Can't use the action directly, you have to use the dispatch
        dispatch(createNewProductAction({ name, price }));
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center-mb-4 font-weight-bold">
                            Add New Product
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="name"
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Price"
                                    name="price"
                                    onChange={e => setPrice(+e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase db-block w-100"
                            >
                                Add Product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;
