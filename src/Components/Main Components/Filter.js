import Option from "../Option"
import axios from "axios"
import { useState } from "react"

const Filter = ({ namesOptions, citiesOptions, statesOptions, typesOptions }) => {
    return (
        <div>
            <p className="text-center">Filter by:</p>
            <form className="row g-4">
                <div className="col-2 offset-2">
                    <label htmlFor="breweriesNameList" className="form-label">Name</label>
                    <input className="form-control" list="breweriesNamesOptions" id="breweriesNameList" placeholder="Name" />
                    <datalist id="breweriesNamesOptions">
                        {
                            namesOptions.map(el => <Option key={el} case_option={el} />)
                        }                        
                    </datalist>
                </div>
                <div className="col-2">
                    <label htmlFor="breweriesCityList" className="form-label">City</label>
                    <input className="form-control" list="breweriesCitiesOptions" id="breweriesCityList" placeholder="City" />
                    <datalist id="breweriesCitiesOptions">
                        {
                            citiesOptions.map(el => <Option key={el} case_option={el} />)
                        }  
                    </datalist>
                </div>
                <div className="col-2">
                    <label htmlFor="breweryStateList" className="form-label">State</label>
                    <input className="form-control" list="breweryStateOptions" id="breweryStateList" placeholder="State" />
                    <datalist id="breweryStateOptions">
                        {
                            statesOptions.map(el => <Option key={el} case_option={el} />)
                        }  
                    </datalist>
                </div>
                <div className="col-2">
                    <label htmlFor="breweryTypeList" className="form-label">Type</label>
                    <input className="form-control" list="breweryTypeOptions" id="breweryTypeList" placeholder="Type" />
                    <datalist id="breweryTypeOptions">
                        {
                            typesOptions.map(el => <Option key={el} case_option={el} />)
                        }  
                    </datalist>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center d-md-block">
                    <button className="btn btn-success" type="submit">Search breweries</button>
                    <button className="btn btn-outline-danger" type="button">Clear all filters</button>
                </div>
            </form>
        </div> 
    )
}

export default Filter