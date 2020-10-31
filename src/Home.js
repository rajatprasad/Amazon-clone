import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="" 
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={150}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />
                <Product
                    id="12323401"
                    title="Apple iPhone 11 (128GB) - Black (Includes EarPods, Power Adapter)"
                    price={54999}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="1231341"
                    title="Acer Nitro 5 Intel Core i5-10th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop"
                    price={65990}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71%2BkGr%2B5LrL._SL1500_.jpg"
                />
                <Product
                    id="12324341"
                    title="Fujifilm Instax Mini 9 - Ice Blue Instant Camera"
                    price={3599}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/41jBvcFUfoL.jpg"
                />
                <Product
                    id="14351341"
                    title="Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={32900}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71rhrO49SmL._SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="1262131"
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                    price={153900}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX679_.jpg"
                />
            </div>
            
            {/* Product */}

        </div>
    )
}

export default Home;
