import { IMG_CDN_URL } from "../config";

/* Destructuring at the parameter level  */
const Restaurant = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="restCard">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="img" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default Restaurant;
