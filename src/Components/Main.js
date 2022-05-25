import Filter from "./Filter"
import Breweries from "./Breweries"
import TitleSection from "./TitleSection"
import axios from "axios"
import { useState, useEffect } from "react"

const Main = () => {
  const baseUrl = 'https://api.openbrewerydb.org/breweries/'
  
  const [breweries, setBreweries] = useState([])

  // Fetch data from Open Brewery DB
  const fetchBreweries = async () => {
    const res = await axios.get(baseUrl)
    const data = res.data
    return data
  }


  useEffect(() => {
    const getBreweries = async () => {
      const breweries = await fetchBreweries()
      setBreweries(breweries)
    }

    getBreweries()
  }, [])

  


  return (
    <main id="main">
      <TitleSection />     
      {/* <Filter />      */}
      <Breweries list={breweries} />     
    </main>
  )
}

export default Main