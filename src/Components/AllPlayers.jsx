import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";



const AllPlayers = ({BASE_API_URL}) => {
	// track all players in a state 
	const [playerList, setPlayerList] = useState([]);
	// fetch all players from API

		useEffect(() => {
				fetchAllPlayers();
		}, [])
	
	const fetchAllPlayers = async () => {
		try {
			const response = await fetch(BASE_API_URL);
			const result = await response.json();
			setPlayerList(result.data.players)
		} catch (err) {
			console.error(err);
		}
	}
	




	return (
		<>
			<div id="displayedInfo">
				<h3>Players:</h3>
				{
				playerList.length ? 
				playerList.map((player) => {
					return (
							<ol key={player.id}><PlayerCard key={player.id} player={player} BASE_API_URL={BASE_API_URL} /></ol>
					)
				})
				: 
				<p>No Players Yet</p>
				}
			</div>
		</>
	)
}

export default AllPlayers