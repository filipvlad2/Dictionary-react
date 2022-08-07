function Search({wordsArray}) {

	function wordSearch(wordsArray) {
		let currentSearch = document.getElementById('searchInput').value;

		if (wordsArray.includes(currentSearch)) {
			alert("Word found!");
		} else {
			alert("Word not found!");
		}
	}

	return (
		<div>
		  <label>
		    Search for a word in the dictionary:
		    <input type="text" id="searchInput" />
		  </label>
		  <button onClick={wordSearch}>Search</button>
		</div>
	);
}

export default Search;