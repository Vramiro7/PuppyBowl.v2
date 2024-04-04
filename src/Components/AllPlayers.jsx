import { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";


const COHORT_NAME = `2402-FTB-ET-WEB-FT`
const BASE_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}/players`

const AllPlayers = () => {
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
						<>
							<ol><PlayerCard key={player.id} player={player} /></ol>
						</>
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