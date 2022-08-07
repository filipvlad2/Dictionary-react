function Add({parentToChild}) {

	function wordAdd({parentToChild}) {
		parentToChild.setData("apelat");
		console.log(parentToChild);

		let word = document.getElementById('addInput').value;
		//wordsArray.push(word);

		document.getElementById('dictionary').append(word + ", ");
	}

	return (
		<div>
		  <label>
		    Add a word in the dictionary with the help of the button
		    <input type="text" id="addInput" />
		  </label>
		  <button onClick={wordAdd}>Add</button>
		</div>
	);
}

export default Add;