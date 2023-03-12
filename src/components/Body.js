import { restList } from "../config";
import Restaurant from "./RestaurantCard";

/* 
    Instead of passing detail.data everytime for every detail required like img,name,dist, etc,
   we can use Rest operator by passing it as argument and make the code more cleaner
  */
const BodyComp = () => {
  return (
    <div className="restaurants">
      {restList.map((detail) => {
        return <Restaurant {...detail.data} key={detail.data.id} />;
      })}
    </div>
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
