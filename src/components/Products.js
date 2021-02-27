const Products = () => {
    return (
        <>
            <h2 className="text-center my-5">Products List</h2>
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
