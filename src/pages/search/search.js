import React from 'react'

const Search = () => {
    const handleClick = () => {
        console.log("button clicked")
    }
  return (
    <div id='search'>
        <h1>Search</h1>
        <div>
            <input type='text' placeholder='cauta dupa autor sau titlu'/>
            <button onClick={handleClick}>Search</button>
        </div>
    </div>
  )
}

export default Search