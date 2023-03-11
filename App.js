import React from "react";
import ReactDOM from "react-dom/client";

/**
 Layout
 Header
  - Logo
  - NavList (right side)
    - About
    - Contact
    - Cart
 Body
  - Search Bar
  - Restaurant Card
    - Image
    - Name
    - Rating
 Footer
  - Links
  - Copyright
 */

const Logo = (
  <img className="logo" 
  src="https://png.pngtree.com/element_our/png/20180823/health-restaurant-logo-design-template-vector-png_62798.jpg" 
  alt="logo"></img>
)

const HeaderComp = () => {
  return (
    <div className="header">
      {Logo}
      <ul className="navItems">
        <li>Contact</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}

const restList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "179457",
      "name": "Agrawals juice and fast food centre",
      "uuid": "cbd2e8ea-3686-4bd2-ac65-810c156f1938",
      "city": "5",
      "area": "Ghatkopar East",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "xxq7nlxfqgez3dokwhzl",
      "cuisines": [
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 0.20000000298023224,
      "slugs": {
        "restaurant": "agrawals-juice-and-fast-food-centre-ghatkopar-east-ghatkopar-vikhroli",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Opposite Odeon Shopping Center, Vallabh Lane, Ghatkopar East, Mumbai",
      "locality": "Ghatkopar East",
      "parentId": 27899,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "Free Mosambi Juice",
        "shortDescriptionList": [
          {
            "meta": "Free Mosambi Juice on orders above ₹509",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free Mosambi Juice on orders above ₹509",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "Free Mosambi Juice",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free Mosambi Juice on orders above ₹509",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "179457",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 0.20000000298023224,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "98926",
      "name": "Jhama Sweets",
      "uuid": "14b43b1e-e5a2-4ec6-ba4f-d8e4f181b806",
      "city": "5",
      "area": "Ghatkopar",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "kykviemst6xqc3a6ornv",
      "cuisines": [
        "Sweets",
        "Chaat"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 0.6000000238418579,
      "slugs": {
        "restaurant": "jhama-sweets-ghatkopar-east-ghatkopar-vikhroli",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Ground Floor, Value Platinum, Seventh Road, Rajawadi, Vidya Vihar East, Ghatkopar East, Mumbai",
      "locality": "Ghatkopar East",
      "parentId": 110785,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "FREE DELIVERY",
        "shortDescriptionList": [
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "98926",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 0.6000000238418579,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.5",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "640822",
      "name": "Tuki",
      "uuid": "cca39c12-2f80-4aef-be93-ed53df4576ce",
      "city": "5",
      "area": "Ghatkopar Vikhroli",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "37c92d52176556c0c098476742d1a41e",
      "cuisines": [
        "Pan-Asian"
      ],
      "tags": [
        
      ],
      "costForTwo": 80000,
      "costForTwoString": "₹800 FOR TWO",
      "deliveryTime": 42,
      "minDeliveryTime": 42,
      "maxDeliveryTime": 42,
      "slaString": "42 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "tuki-ghatkopar-vikhroli-ghatkopar-vikhroli",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "B-16, KAILAS INDL. COMPLEX, VEER SAVARKAR ROAD, POWAI VIKHROLI ROAD, VIKHROLI WEST, MUMBAI - 400079, Greater Mumbai Ward-S, Greater Mumbai, Maharashtra-400079",
      "locality": "veer savarkar road",
      "parentId": 218252,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "FLAT125 off",
        "shortDescriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6138215~p=13~eid=00000186-cfc5-a68a-113e-bd2800810d7d",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "640822",
        "deliveryTime": 42,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "5.0",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "31987",
      "name": "Natural Ice Cream",
      "uuid": "c3ebcca5-c25d-4e06-8899-7b1c3642a3dc",
      "city": "5",
      "area": "Ghatkopar East",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "c19lnmlrlslwmupolnoz",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "natural-ice-cream-near-ghatkopar-station-ghatkopar-vikhroli",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "6 & 7, Nand Ashish, R. B. Mehta Marg, Patel Chowk, Near Ghatkopar Station, Ghatkopar East, Mumbai, Maharashtra 400077",
      "locality": "Near Ghatkopar Station",
      "parentId": 2093,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "31987",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.7",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "603169",
      "name": "Gupta Sandwiches & Snacks",
      "uuid": "d2364f48-d4a5-42e0-a979-24ecfa9ddf75",
      "city": "5",
      "area": "Ghatkopar East",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "ji1idjnigvc8jxpp2z83",
      "cuisines": [
        "Fast Food",
        "Biryani",
        "Snacks",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 0.30000001192092896,
      "slugs": {
        "restaurant": "gupta-sandwiches-&-snacks-ghatkopar-vikhroli-ghatkopar-vikhroli",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "4 Lil Niwas, Tilak Road, Ghatkopar East, Mumbai, Pin -",
      "locality": "Tilak Road",
      "parentId": 5749,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "0.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "603169",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 0.30000001192092896,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "344841",
      "name": "Subway",
      "uuid": "e1c3ccd1-978c-4012-b647-34e02a2856a6",
      "city": "5",
      "area": "Corner Of 19th Road",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "0bf19a82b109b40c2f5c56d00f071a33",
      "cuisines": [
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "subway-chembur-chembur-2",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop No 2, Girivan Pristino, 57, Corner of 19th Road, &, DK Sandu St, Chembur, Mumbai, Maharashtra 400071",
      "locality": "Chembur",
      "parentId": 2,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          
        ],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6170147~p=28~eid=00000186-cfc5-a68a-113e-bd2d00811c6a",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "344841",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  }
]

const Restaurant = (props) => {
  return (
  <div className="restCard">
      <img src={
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
        +props.restImg}
         alt="img"/>
      <h2>{restList[1].data.name}</h2>
      <h3>{restList[1].data.cuisines.join(', ')}</h3>
      <h4>{restList[1].data.lastMileTravelString}</h4>
  </div>
  )
}

const BodyComp = () => {
  return (
    <div className="restaurants">
    <Restaurant restImg={restList[1].data.cloudinaryImageId}/>
    <Restaurant/>
    <Restaurant/>
    <Restaurant/>
    <Restaurant/>
    <Restaurant/>
    </div>
  )
}

const FooterComp = () => {
  return (
    <div>
      <h3>Footer</h3>
    </div>
  )
}

/* Instead of <React.Fragment>...</React.Fragment> we can just put <>...</> */
const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderComp/>
      <BodyComp/>
      <FooterComp/>
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

/*or
root.render({AppLayout()});
*/
