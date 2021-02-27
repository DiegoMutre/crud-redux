import { useDispatch } from "react-redux";
import { createNewProductAction } from "../actions/productsActions";

const NewProduct = () => {
    // *  To be able to execute the actions
    const dispatch = useDispatch();

    // *! Can't use the action directly, you have to use the dispatch
    const addProduct = () => {
        dispatch(createNewProductAction());
    };

    const handleSubmit = e => {
        e.preventDefault();

        // *TODO: Validate

        // *TODO: Create new product
        addProduct();
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
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Product Name"
                                    name="price"
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
