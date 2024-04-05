import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";



const AllPlayers = ({BASE_API_URL}) => {

	const [playerList, setPlayerList] = useState([]);

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