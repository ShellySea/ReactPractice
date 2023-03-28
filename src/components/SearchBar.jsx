import { useState } from "react";
import { restList } from "../config";


function filterData (searchText, restaurants) {
 return restaurants.filter((res) => res.data.name.includes(searchText));
}


const SearchBar = () => {
    // Declaring and Assigning variable to a value in JS:
    // const searchText = 'Jhama';

    // Declaring and Assigning variable to a value in React:
    const [searchText, setSearchText] = useState('Jhama');

    const [restaurants, setRestaurants] = useState(restList);

    return (
        <div className="searchBar">
            <input type="text" 
            placeholder="Search"
            value={searchText}
            onChange={(e)=> {
                setSearchText(e.target.value);
            }}
            /> &nbsp;
            <button onClick={() => {
                const data = filterData(searchText, restaurants);
                setRestaurants(data);
            }}>Search</button>
            <span>{searchText}</span>
        </div>
    )
}

export default SearchBar;