function ProductRow({product}) {
    return (
        <>
            <tr>
                <td><span style={product.stocked ? {} : {color: 'red'}}>{product.name}</span></td>
                <td>{product.price}</td>
            </tr>
        </>
    );
}

export default ProductRow;