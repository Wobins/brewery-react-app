import Filter from "../Main Components/Filter"
import Breweries from "../Main Components/Breweries"
import TitleSection from "../Main Components/TitleSection"
import axios from "axios"
import { useState, useEffect } from "react"

const Main = () => {
  const url = 'https://api.openbrewerydb.org/breweries'
  
  const [breweries, setBreweries] = useState([])
  const [names, setNames] = useState([])
  const [cities, setCities] = useState([])
  const [states, setStates] = useState([])
  const [types, setTypes] = useState([])

  // Fetch data from Open Brewery DB
  const fetchBreweries = async () => {
    const res = await axios.get(url)
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

  useEffect(() => {
    const getOptions = async () => {
      const data = await fetchBreweries()
      let allNames = []
      let allStates = []
      let allCities = []
      let allTypes = []

      data.forEach(el => {
        let name = el.name
        let state = el.state
        let city = el.city
        let type = el.brewery_type

        allNames.push(name)
        allStates.push(state)
        allCities.push(city)
        allTypes.push(type)
      });

      const names = [...new Set(allNames)];
      const states = [...new Set(allStates)];
      const cities = [...new Set(allCities)];
      const types = [...new Set(allTypes)];
      setNames(names)
      setStates(states)
      setCities(cities)
      setTypes(types)
    }

    getOptions()
  }, [])

  return (
    <main id="main">
      <TitleSection />     
      <Filter namesOptions={names} statesOptions={states} citiesOptions={cities} typesOptions={types} />     
      <Breweries list={breweries} />     
    </main>
  )
}

export default Main