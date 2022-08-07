function Search(props) {

	function handleSearchClick() {
		let searchedWord = document.getElementById("searchInput").value;
		let foundWord = props.searchWordsList.find((word) => word === searchedWord);

		if (foundWord !== searchedWord) {
			props.setAlertMsg("Word not found!");
		} else {
			props.setAlertMsg("Word found!");
		}
	}

	return (
		<div className="searchDiv">
			<label>Search the word</label>
			<input type="text" id="searchInput"></input>
			<button onClick={() => handleSearchClick()}>Search</button>
		</div>
	)
}

export default Search;