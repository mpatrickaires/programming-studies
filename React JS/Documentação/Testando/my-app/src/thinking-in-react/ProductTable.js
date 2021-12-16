import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ data, filterText, inStockOnly }) {
    function getRows() {
        let rows = [];
        let categoriesAux = [];

        data.forEach((product) => {
            if (
                product.name.includes(filterText) &&
                (!inStockOnly || product.stocked)
            ) {
                if (!categoriesAux.includes(product.category)) {
                    rows.push(
                        <ProductCategoryRow
                            key={product.category}
                            category={product.category}
                        />
                    );
                    categoriesAux.push(product.category);
                }
                rows.push(<ProductRow key={product.name} product={product} />);
            }
        });

        return rows;
    }

    const rows = getRows();

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default ProductTable;
