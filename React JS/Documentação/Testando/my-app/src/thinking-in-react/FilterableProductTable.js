import { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable({ data }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    function handleTextChange(value) {
        setFilterText(value);
    }

    function handleCheckChange() {
        setInStockOnly(!inStockOnly);
    }

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                handleTextChange={handleTextChange}
                handleCheckChange={handleCheckChange}
            />
            <ProductTable
                data={data}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

export default FilterableProductTable;
