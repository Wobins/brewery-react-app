import axios from "axios"

const getNames = async () => {
    const url = 'https://api.openbrewerydb.org/breweries?per_page=50'
    const res = await axios.get(url)
    const data = res.data
    let allNames = []

    data.forEach(el => {
        let name = el.name
        allNames.push(name)
    });
    
    let names = [...new Set(allNames)];
    return names
}

export default getNames


