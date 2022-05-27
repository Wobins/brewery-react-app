import React from 'react'
import PropTypes from 'prop-types'

const NumberOfBreweries = ({ size }) => {
  return (
    <div className='row'>
        <div className='col-2 col-lg-1'>
          <input className='form-control' type='number' min={size} max={50} placeholder='20' />
        </div>
    </div>
  )
}

NumberOfBreweries.defaultProps = {
  size: 20
}

NumberOfBreweries.propTypes = {
  size: PropTypes.number
}

export default NumberOfBreweries