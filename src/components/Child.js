import React from "react";

const Child=({cartItems,setCartItems})=>{

    function handleRemove(id){
        const updatedCartItems = cartItems.filter((item, i) => i !== id);
        
        // Update the state with the new array
        setCartItems(updatedCartItems);
    }

    return(
        <div className="child">
            <h1>Child Component</h1>
            {
                cartItems.length > 0 && (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.ItemName} - ${item.Price}{ }
                                <button onClick={() => handleRemove(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default Child;