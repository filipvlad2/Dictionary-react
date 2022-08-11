import {useRef} from 'react';

function Add(props) {

	const ref = useRef(null);

	function handleAddClick() {
		let addedWord = ref.current.value;

		props.setWordsList((currentWords) => [...currentWords, addedWord]);
	}

	return (
		<div className="addDiv">
			<label>Add the word</label>
			<input type = "text" id = "addInput" ref = {ref}></input>
			<button onClick = {() => handleAddClick()}>Add</button>
		</div>
	)
}

export default Add;
