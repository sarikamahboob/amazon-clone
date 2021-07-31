import React from 'react'
import Product from './Product'
import "./Mobile.css"

function Mobile() {
    return (
        <div className="mobile" >
             <Product 
                    id="11"
                    title="OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version, 8GB RAM+128GB Storage, 90Hz Fluid Display,Triple Camera, with Alexa Built-in" 
                    price={400.22} 
                    rating={3} 
                    image="https://m.media-amazon.com/images/I/51uEwkqjZTL._AC_SL1040_.jpg"/>
            <Product 
                    id="12"
                    title="nePlus 8T Lunar Silver, 5G Unlocked Android Smartphone U.S. Version, 256GB Storage + 12GB RAM, 120Hz Fluid Display, Quad Camera" 
                    price={549.99} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/71qXYE4Np6S._AC_SL1500_.jpg"/>
        </div>
    )
}

export default Mobile
