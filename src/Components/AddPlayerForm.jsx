import { useState } from "react";


const AddPlayerForm = ({BASE_API_URL}) => {

	const [name, setName] = useState("")
	const [breed, setBreed] = useState("")
	const [imageUrl, setImageUrl] = useState("")

 
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				BASE_API_URL,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json',},
					body: JSON.stringify({
						name,
						breed,
						imageUrl,
					}),
				}
			);
			const result = await response.json();
			setName("");
			setBreed("");
			setImageUrl("");
		} catch (err) {
			console.error(err);
		}

	}	
	
	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					<input
						type="text"
						placeholder="Name" 
						id="name" 
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					<input type="text" 
						placeholder="Breed"
						id="breed"
						value={breed}
						onChange={(e) => setBreed(e.target.value)}
					/>
				</label> 
				<label>
					<input
						type="text"
						placeholder="Image" 
						id="imageURL" 
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
					/> 
				</label><br />
				<label> 
					<input type="submit" value="Add Puppy" />
				</label>
			</form>
		</>
	)
}

export default AddPlayerForm