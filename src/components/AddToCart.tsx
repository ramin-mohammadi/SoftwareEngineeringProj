'use client'
import axios from 'axios';
import React from 'react';
import { useSession } from 'next-auth/react';

// MUST SEPARATE client side components such as on click events into their own component (put use client at top of file to specify this) and not be async. Async functions cannot be client side b/c waiting on server to provide response? (RAMIN NOTES)
const AddToCart = (props) => {

    const { data: session } = useSession();
    const { product } = props;

    return (
        <div>
            <button onClick={() => {
                axios.post('/api/cart/add', {
                    name: session.user.name,
                    email: session.user.email,
                    PRODUCT_ID: product.PRODUCT_ID,
                    PRODUCT_NAME: product.PRODUCT_NAME,
                    PRODUCT_QUANTITY: product.PRODUCT_QUANTITY,
                    PRODUCT_PRICE: product.PRODUCT_PRICE,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    switch(response.data.status){
                        case 'success':
                            alert("Added item to cart!");
                            break;
                        case 'out of stock':
                            alert("Product is out of stock. Cannot add product to cart.");
                            break;
                        case 'overflow stock':
                            alert("Cannot add item to cart. You already have the entire available stock for that product in your cart");
                            break;
                    }
                }).catch((error) => {
                    console.log("ERROR");
                    console.log(error);
                });
            }
            }>Add To Cart</button>
        </div>
    );
};

export default AddToCart;