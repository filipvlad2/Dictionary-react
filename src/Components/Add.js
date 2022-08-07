function Add(props) {

	function handleAddClick() {

		let addedWord = document.getElementById("addInput").value;

		props.setWordsList((currentWords) => [...currentWords, addedWord]);

		document.getElementById("dictionary").innerHTML += addedWord + ", ";
	}

	return (
		<div className="addDiv">
			<label>Add the word</label>
			<input type="text" id="addInput"></input>
			<button onClick={() => handleAddClick()}>Add</button>
		</div>
	)
}

export default Add;