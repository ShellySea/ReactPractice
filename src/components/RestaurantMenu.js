import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  // const data = useParams();
  // console.log(data);
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({});
  const [recommendedMenu, setRecommendedMenu] = useState([]);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0790239&lng=72.9080122&restaurantId=" +
        id
    );
    const convJson = await data.json();
    console.log(convJson);
    setRestaurant(convJson?.data?.cards[0]?.card?.card?.info);
    setRecommendedMenu(
      convJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards
    );
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  function goBack() {
    navigate(-1);
  }

  function replaceImg(error) {
    error.target.src =
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fimg&psig=AOvVaw3ARQJsVJl7O44lOJaI8foV&ust=1681058181214000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICF9-_bmv4CFQAAAAAdAAAAABAE";
  }

  return !restaurant || recommendedMenu?.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="flex-end">
        <button onClick={goBack}>Back</button>
      </div>
      <h3>Restaurant ID: {id}</h3>
      <h3>Restaurant Name: {restaurant?.name}</h3>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="img" />
      <h3>Area: {restaurant?.locality}</h3>
      <h3>Rating: {restaurant?.avgRatingString}</h3>
      <h3>Cost for Two: {restaurant?.costForTwo}/-</h3>
      <div className="menu">
        <h4>Recommended Menu: </h4>
        <ul>
          {!recommendedMenu ? <h2>No Recommended Menu</h2> : null}
          {recommendedMenu?.map((detail) => {
            return (
              <li key={detail.card.info.id}>
                {detail.card.info?.name}
                <br />
                <img
                  className="recommended-menu-img"
                  src={IMG_CDN_URL + detail.card.info?.imageId}
                  onError={replaceImg}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
