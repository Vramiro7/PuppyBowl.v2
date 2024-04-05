

const PlayerCard = ({player, BASE_API_URL}) => {
	

	const clickHandler = async () => {
		try {
			const response = await fetch( `${BASE_API_URL}/${player.id}` ,
				{
					method: 'DELETE',
				}
			);
			const result = await response.json();
		} catch (err) {
			console.error(err);
		}
	}
	return (
		<>
			<div className="playerCard">
				<h2>{player.name}</h2>
				<img className="pupImage" src={player.imageUrl} alt="Image of Player" />
				<p>{player.breed}</p>
				<button>Details</button><br />
				<button onClick={clickHandler}>Exile</button>
			</div>
		</>
	)
}

export default PlayerCard