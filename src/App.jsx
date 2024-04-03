import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import AllPlayerPage from './Pages/AllPlayerPage'
import "../src/CSS/App.css" 


const COHORT_NAME = `2402-FTB-ET-WEB-FT`
const BASE_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}/players`


const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/players" 
          element={
            <AllPlayerPage Base_url={BASE_API_URL} />} />
      </Routes>
    </>
  )
}

export default App
