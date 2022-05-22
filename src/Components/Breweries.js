import Brewery from "./Brewery"

const Breweries = () => {
  return (
    <div>
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
                <Brewery />
            </tbody>
        </table>
    </div>
  )
}

export default Breweries