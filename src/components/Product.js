import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import {
    deleteProductAction,
    getProductToEditAction,
} from "../actions/productsActions";

const Product = ({ product, product: { id, name, price } }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "A product deleted can't be recovered",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete",
            cancelButtonText: "Cancel",
        }).then(result => {
            if (result.value) {
                dispatch(deleteProductAction(id));
            }
        });
    };

    const handleEdit = () => {
        dispatch(getProductToEditAction(product));
        history.push(`/products/edit/${product.id}`);
    };

    return (
        <tr>
            <td>{name}</td>
            <td>
                <span className="font-weight-bold">${price}</span>
            </td>
            <td className="acciones">
                <button className="btn btn-primary mr-2" onClick={handleEdit}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Product;
