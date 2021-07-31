import React from 'react'
import Product from './Product'
import "./Kitchen.css"

function Kitchen() {
    return (
        <div className="kitchen">
            <Product 
                    id="20"
                    title="GreenLife Soft Grip Healthy Ceramic Nonstick Yellow Cookware Pots and Pans Set, 16-Piece" 
                    price={99.99} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/71TvASYPjkL._AC_SL1500_.jpg"/>
            <Product 
                    id="21"
                    title="Rachael Ray Cucina Nonstick Cookware Pots and Pans Set, 12 Piece, Pumpkin Orange" 
                    price={133.43} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/91yEMThIhXL._AC_SL1500_.jpg"/>
            <Product 
                    id="2"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
                    price={239} 
                    rating={4} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"/>
        </div>
    )
}

export default Kitchen
