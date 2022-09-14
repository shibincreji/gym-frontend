const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden" /*className="btn btn-success"*/ >Search Here</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search here"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;