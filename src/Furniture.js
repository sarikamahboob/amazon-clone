import React from 'react'
import Product from './Product';
import "./Furniture.css"

function Furniture() {
    return (
        <div className="furniture">
            <Product 
                    id="15"
                    title="Martin Furniture Open L-Desk, White" 
                    price={1237.39} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/71GB180KtOL._AC_SL1047_.jpg"/>
            <Product 
                    id="16"
                    title="Bush Furniture Key West Secretary Desk with Keyboard Tray and Storage Cabinet in Washed Gray" 
                    price={241.99} 
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/91QF0RLzPZL._AC_SL1500_.jpg"/>
        </div>
    )
}

export default Furniture
