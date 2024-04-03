const AddPlayerForm = () => {
	return (
		<>
			<form>
				<label>
					<input type="text" placeholder="Name" id="name"/>
				</label>
				<label>
					<input type="text" placeholder="Breed" id="breed" />
				</label> <br />
				<label> 
					<input type="submit" />
				</label>
			</form>
		</>
	)
}

export default AddPlayerForm