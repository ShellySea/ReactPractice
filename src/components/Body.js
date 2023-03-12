import { restList } from "../config";
import Restaurant from "./RestaurantCard";
import { useState } from "react";
import { restList } from "../config";

function filterData(searchText, restaurants) {
  return restaurants.filter((res) => res.data.name.includes(searchText));
}

const BodyComp = () => {
  // Declaring and Assigning variable to a value in JS:
  // const searchText = 'Jhama';

  // Declaring and Assigning variable to a value in React:
  const [searchText, setSearchText] = useState("Jhama");

  const [restaurants, setRestaurants] = useState(restList);

  return (
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
            const data = filterData(searchText, restaurants);
            console.log(searchText);
            setRestaurants(data);
            if (searchText === "") {
              setRestaurants(restList);
            }
          }}
        >
          Search
        </button>
        <span>{searchText}</span>
      </div>
      <div className="restaurants">
        {restaurants.map((detail) => {
          return <Restaurant {...detail.data} key={detail.data.id} />;
        })}
      </div>
    </>
  );
};

/* 
    Instead of passing detail.data everytime for every detail required like img,name,dist, etc,
   we can use Rest operator by passing it as argument and make the code more cleaner
  */
const BodyComp1 = () => {
  return (
    <div className="restaurants">
      {restList.map((detail) => {
        return Restaurant({ ...detail.data });
      })}
    </div>
  );
};

/** Exporting multiple things then we cannot use default
 * Default is used when only 1 export is made
 * Also while exporting multiple, then import using : import {BodyComp, BodyComp1}
 */
export { BodyComp, BodyComp1 };
