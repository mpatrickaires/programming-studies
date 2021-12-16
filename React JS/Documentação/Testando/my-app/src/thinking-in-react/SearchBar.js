function SearchBar({
    filterText,
    inStockOnly,
    handleTextChange,
    handleCheckChange,
}) {
    function onTextChange(e) {
        handleTextChange(e.target.value);
    }

    function onCheckChange(e) {
        handleCheckChange();
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={filterText}
                    onChange={onTextChange}
                    placeholder="Search..."
                />
            </div>
            <div>
                <input
                    type="checkbox"
                    value={inStockOnly}
                    onChange={onCheckChange}
                    name="check"
                    id="check"
                />
                <label htmlFor="check">Only show products in stock</label>
            </div>
        </div>
    );
}

export default SearchBar;
