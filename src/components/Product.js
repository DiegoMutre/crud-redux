import PropTypes from "prop-types";

const Product = ({ product: { id, name, price } }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                <span className="font-weight-bold">${price}</span>
            </td>
            <td className="acciones">
                <button className="btn btn-primary mr-2">Edit</button>
                <button className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
};

export default Product;
