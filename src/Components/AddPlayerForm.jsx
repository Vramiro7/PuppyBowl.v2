

const AddPlayerForm = () => {

	const handleSubmit = (e) => {
		e.preventDefault();

	}	
	


	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					<input
						type="text"
						placeholder="Name" 
						id="name" 
						onChange={(e) => {
							e.target.value
							console.log(e.target.value)
						}}/>
				</label>
				<label>
					<input type="text" 
						placeholder="Breed"
						id="breed"
						onChange={(e) => {
							e.target.value
							console.log(e.target.value)
						}}
					/>
				</label> <br />
				<label> 
					<input type="submit" />
				</label>
			</form>
		</>
	)
}

export default AddPlayerForm