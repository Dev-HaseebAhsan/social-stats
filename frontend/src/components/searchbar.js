import React from 'react'

function searchbar({placeholder, data}) {
  return (
    <div className='search'>
      <div className='search-inputs'>
        <input type='text' placeholder={placeholder}/>
        <div className='search-icon'> </div>
      </div>
      <div className='result'>

      </div>
    </div>
  )
}

export default searchbar