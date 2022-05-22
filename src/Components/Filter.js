const Filter = () => {
  return (
    <div>
        <p>Filter by:</p>
        <form>
            <div>
                <input type='text' placeholder='Brewery name' />
                <input type='text' placeholder='City' />
                <select className="form-select">
                    <option selected>State</option>
                    <option value="1">One</option>
                </select>
                <select className="form-select">
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