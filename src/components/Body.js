import Restaurant from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  return restaurants.filter((res) =>
    res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

const BodyComp = () => {
  // Declaring and Assigning variable to a value in JS:
  // const searchText = 'Jhama';

  // Declaring and Assigning variable to a value in React:
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState(false);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  async function getRestaurants() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0790239&lng=72.9080122&page_type=DESKTOP_WEB_LISTING"
    );
    const convJson = await data.json();
    setAllRestaurants(convJson?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(convJson?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  // Early return
  if (!allRestaurants) return null;

  // if (allRestaurants?.length !== 0 && filteredRestaurants.length === 0)
  //   return <h3>No Restaurants Found!</h3>;

  // Conditional Rendering for loader
  return allRestaurants?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />{" "}
        &nbsp;
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            data.length === 0
              ? setSearchResult("true")
              : setSearchResult("false");
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {searchResult === "true" ? <h3>No Restaurants Found!</h3> : null}
      <div className="restaurants">
        {console.log(filteredRestaurants)}
        {filteredRestaurants.map((detail) => {
          return (
            <Link to={"/restaurant/" + detail.data?.id}>
              <Restaurant {...detail.data} key={detail.data?.id} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

/** Exporting multiple things then we cannot use default
 * Default is used when only 1 export is made
 * Also while exporting multiple, then import using : import {BodyComp, BodyComp1}
 */
export { BodyComp };
