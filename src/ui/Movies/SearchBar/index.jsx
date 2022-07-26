import './styles.scss'

const SearchBar = ({ inputValue, search }) => {
  return (
    <div className="search-container">
      <div className="input-container search-container__input">
        🔍
        <input
          className="search-container__input search-container__input--no-styles"
          type="search"
          placeholder="Name"
          value={!inputValue ? '' : null}
          onChange={ (e) => search(e.target.value) }
        />
      </div>
    </div>
  )
}

export default SearchBar
