import Option from "./Breweries Components/Filter Components/Option"
import ApplyButton from "./Breweries Components/Filter Components/ApplyButton"
import ClearButton from "./Breweries Components/Filter Components/ClearButton"
import { useState } from "react"

const Filter = ({ namesOptions, citiesOptions, statesOptions, typesOptions, }) => {
    const [nameOption, setNameOption] = useState('')
    const [cityOption, setCityOption] = useState('')
    const [stateOption, setStateOption] = useState('')
    const [typeOption, setTypeOption] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()


        console.table([nameOption, cityOption, stateOption, typeOption])

        setNameOption('')
        setCityOption('')
        setStateOption('')
        setTypeOption('')
    }

    const handleReset = (e) => {
        setNameOption('')
        setCityOption('')
        setStateOption('')
        setTypeOption('')
    }

    return (
        <div>
            <p className="text-center">Filter by:</p>
            <form 
                className="row g-4" 
                onSubmit={handleSubmit}
                onReset={handleReset}
            >
                <div className="col-2 offset-2">
                    <label htmlFor="breweriesNameList" className="form-label">Name</label>
                    <input className="form-control" list="breweriesNamesOptions" id="breweriesNameList" placeholder="Name" value={nameOption} onChange={(e) => setNameOption(e.target.value)} />
                    <datalist id="breweriesNamesOptions">
                        {
                            namesOptions.map(el => <Option key={el} case_option={el} />)
                        }                        
                    </datalist>
                </div>

                <div className="col-2">
                    <label htmlFor="breweriesCityList" className="form-label">City</label>
                    <input className="form-control" list="breweriesCitiesOptions" id="breweriesCityList" placeholder="City" value={cityOption} onChange={(e) => setCityOption(e.target.value)} />
                    <datalist id="breweriesCitiesOptions">
                        {
                            citiesOptions.map(el => <Option key={el} case_option={el} />)
                        }  
                    </datalist>
                </div>

                <div className="col-2">
                    <label htmlFor="breweryStateList" className="form-label">State</label>
                    <input className="form-control" list="breweryStateOptions" id="breweryStateList" placeholder="State" value={stateOption} onChange={(e) => setStateOption(e.target.value)}  />
                    <datalist id="breweryStateOptions">
                        {
                            statesOptions.map(el => <Option key={el} case_option={el} />)
                        }  
                    </datalist>
                </div>

                <div className="col-2">
                    <label htmlFor="breweryTypeList" className="form-label">Type</label>
                    <input className="form-control" list="breweryTypeOptions" id="breweryTypeList" placeholder="Type" value={typeOption} onChange={(e) => setTypeOption(e.target.value)}  />
                    <datalist id="breweryTypeOptions">
                        {
                            typesOptions.map(el => <Option key={el} case_option={el} />)
                        }  
                    </datalist>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center d-md-block">
                    <ApplyButton />
                    <ClearButton />
                </div>
            </form>
        </div> 
    )
}

export default Filter