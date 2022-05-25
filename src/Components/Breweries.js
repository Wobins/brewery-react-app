import Brewery from "./Brewery"

const Breweries = ({ list }) => {

    console.log(list)
  return (
    <div className="container">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Type</th>
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