import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
  return (
    <header>
      <div className="text-center">
        <h1>BREWERIES REACT APP</h1>
        <p>Looking for a brewery?</p>
        <p>Here is a comprehensive list of breweries available from <mark><a href="https://www.openbrewerydb.org/" target="_blank">Open Brewery DB</a></mark>.</p>
        <a className="btn btn-primary" href="#main" role="button">View Breweries</a>
      </div>
    </header>
  )
}

export default Header