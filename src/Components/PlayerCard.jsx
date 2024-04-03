const PlayerCard = ({player}) => {
	return (
		<>
			<div className="playerCard">
				<h2>{player.name}</h2>
				<img className="pupImage" src={player.imageUrl} alt="Image of Player" />
				<p>{player.breed}</p>
			</div>
		</>
	)
}

export default PlayerCard