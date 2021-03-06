import NumberOfBreweries from "./Breweries Components/NumberOfBreweries"
import Brewery from "./Breweries Components/Brewery"

const Breweries = ({ list }) => {
  return (
    <div className="container">
        <NumberOfBreweries />
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Type</th>
                </tr>
            </thead>
            <tbody>
                {list.map((brewery) => (
                    <Brewery key={brewery.id} brewery={brewery} />
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Breweries