import { useState } from "react"

const UpdateArray = () => {


    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    const handleAddFoods = () => {
        
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""
        setFoods(f => [...foods, newFood])
    }

    const handleRemoveFoods = (index) => {

        setFoods(foods.filter((_ , i) => i !== index));

    }

    return (
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food, index) => <li key={index}>{food} onClick={() => handleRemoveFoods(index)}</li>)}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFoods}>Add food</button>
        </div>
    )

}

export default UpdateArray