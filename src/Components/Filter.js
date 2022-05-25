import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

const Filter = () => {
  return (
    <div className="text-center">
        <p>Filter by:</p>
        <form className="row g-4">
            <div className="col-auto">
                {/* <label for="breweriesNameList" class="form-label"></label> */}
                <input class="form-control" list="breweriesNamesOptions" id="breweriesNameList" placeholder="Name" />
                <datalist id="breweriesNamesOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                </datalist>
            </div>
            <div className="col-auto">
                {/* <label for="breweriesCityList" class="form-label"></label> */}
                <input class="form-control" list="breweriesCitiesOptions" id="breweriesCityList" placeholder="City" />
                <datalist id="breweriesCitiesOptions">
                    <option value="San Francisco" />
                    <option value="New York" />
                </datalist>
            </div>
            <div className="col-auto">
                <select className="form-control">
                    <option selected>State</option>
                    <option value="1">One</option>
                </select>
            </div>
            <div className="col-auto">
                <select className="form-control">
                    <option selected>Type</option>
                    <option value="1">One</option>
                </select>
            </div>
            <div>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
        </form>
    </div> 
  )
}

export default Filter