import { useState } from "react"

function SearchBar({query}) {

    const [searchTerm, setSearchTerm] = useState('')


function formHandler(e){
    setSearchTerm(e.target.value)
}

    return (
        <div>
            <form onClick={click} onSumbit={query}>
                <label>
                    <svg onClick={click} xmlns="http://www.w3.org/2000/svg" width="44" height="44" aria-hidden="true">
                    <path filrule="#2D2D2D" fillrule="evenodd" d="M21.5 12a8.5 8.5 0 016.49 13.989L32 30l-2 2-4.18-4.179A8.5 8.5 0 1121.5 12zm0 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"></path>
                    <button onClick={click} type="submit" value="Submit"></button>
                    </svg>
                <input type="text" value={searchTerm} id="searchTerm" placeholder="Search..." onChange={formHandler}></input>
                </label>
            </form>       
        </div>
    )
}

export default SearchBar
