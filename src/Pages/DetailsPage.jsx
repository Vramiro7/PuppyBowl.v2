import { useState } from "react"


const DetailPage = ({BASE_API_URL}) => {
  //set state for selected puppy 
  const [selectedPlayer, setSelectedPlayer] = useState("")

  //fetch single player from api
  const fetchSinglePlayer = async () => {
    
  }
  //set single player in a state
  fetchSinglePlayer();

  return (
    <>
    {/* place player.name in h1 */}
      <h1>Player</h1>
    {/* display new player card with all player information of fetched player*/}
    </>
  )
}

export default DetailPage