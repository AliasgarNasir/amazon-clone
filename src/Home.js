import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          <Product
            id="6541289"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
            price={2499}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="7854693"
            title="Kenwood KMX750RD stand mixer gives you a perfect baking and cooking experience .
            The stand mixer is based on a mess free baking concept that has a powerful motor designed to give optimum control and performance with variable electronic speed control."
            price={5429}
            image="https://images-na.ssl-images-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
            rating={3}
          />

          {/* Product */}
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung Galaxy Watch (Bluetooth + LTE, 46 mm) - Silver"
            price={15000}
            image="https://m.media-amazon.com/images/I/71oNPZKNTfL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="23445930"
            title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Blue)"
            price={3999}
            image="https://images-na.ssl-images-amazon.com/images/I/41dayzt6quL._SY450_.jpg"
            rating={4}
          />
          <Product
            id="3254354345"
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
            price={89900}
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung 24-inch (59.8 cm) Curved Gaming Monitor- Full HD, AMD Free Sync, 144 Hz Refresh Rate- LC24RG50FQWXXL"
            price={13000}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnr06xmu6nNbsVDcOOxMirVtnPz_ylwqiD9uyxs4_Gs-Q-g6YGFypNzoT8Q3fvKSQUXwdIQ-U&usqp=CAc"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
