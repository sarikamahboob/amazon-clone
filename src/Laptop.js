import React from 'react'
import Product from './Product'
import "./Laptop.css"

function Laptop() {
    return (
        <div className="laptop">
            <Product 
                    id="7"
                    title="Lenovo Flex 5 14 2-in-1 Laptop, 14.0 FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey" 
                    price={598.89} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/81KNxSLu4yL._AC_SL1500_.jpg"/>
            <Product 
                    id="8"
                    title="Acer Aspire 5 Slim Laptop, 15.6 Inches FHD IPS Display, 8th Gen Intel Core i5-8265U, 8GB DDR4, 256GB SSD, Fingerprint Reader, Windows 10 Home, A515-54-51DJ" 
                    price={609.99} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/71sesDsw95L._AC_SL1500_.jpg"/>
                         
        </div>
    )
}

export default Laptop
