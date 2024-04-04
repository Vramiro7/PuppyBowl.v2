import AddPlayerForm from '../Components/AddPlayerForm'
import AllPlayers from '../Components/AllPlayers'


const COHORT_NAME = `2402-FTB-ET-WEB-FT`
const BASE_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}/players`


const AllPlayerPage = () => {

	return (
		<>
			<AddPlayerForm BASE_API_URL={BASE_API_URL} />
			<AllPlayers BASE_API_URL={BASE_API_URL} />
		
		</>
	)
}

export default AllPlayerPage