import { useContext, useState, useEffect } from 'react'
import { UserContext } from "../App"

function SearchBar () {
    const { search, setSearch } = UserContext
    
    function InputSearch (event) {
        setSearch(event.target.value)
    }

    return (
        <form>
            <input onChange={InputSearch}/>
            <button>Submit</button>
        </form>
    )
}

export default SearchBar