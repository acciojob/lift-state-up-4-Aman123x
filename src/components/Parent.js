import React, { useState } from "react";
import Child from "./Child";

const Parent=()=>{

    const [cartItems,setCartItems]=useState([]);
    const[btn,setBtn]=useState({
        ItemName:"",
        Price:""
    })

    function handleInput(e){
        let key=e.target.name;
        setBtn({...btn,[key]:e.target.value})
    }

    function handleForm(e){
        e.preventDefault();
        setCartItems([...cartItems,btn]);
    }


    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <form onSubmit={(e)=>handleForm(e)}>
                <label>Item Name:</label>
                <input id="itemName" type="text"
                    onChange={handleInput}
                    value={btn.ItemName}
                    name="ItemName"
                />

                <label>Item Price:</label>
                <input id="itemPrice" type="number"
                    onChange={handleInput}
                    name="Price"
                    value={btn.Price}
                />
                <button type="submit">Add Item</button>
            </form>
            <Child cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
    )
}

export default Parent;