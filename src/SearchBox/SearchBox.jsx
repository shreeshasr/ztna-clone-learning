import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './SearchBox.css'
function SearchBox() {
    return (
        <div className="search-box">
            <input type="text" placeholder="Search"/>
            <span>
                 <SearchIcon/>  
            </span>
        </div>
    )
}

export default SearchBox
