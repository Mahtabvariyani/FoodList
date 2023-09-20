import React, { useState } from "react";

export default function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [image, setImage] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, calories, servings, image };

    props.addFood(newFood);
    setName("");
    setCalories("");
    setServings("");
    setImage("");
  };

  return (
    <div className="AddFoodForm">
      <h2>New Food</h2>
      <form action="" onSubmit={handleSubmit}>
        {" "}
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <label>calories</label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />
        <label>servings</label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />
        <label>Image</label>
        <input
          type="text"
          name="Image"
          value={image}
          onChange={handleImageInput}
        />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

// Iteration 5 | Add New Food - AddFoodForm component
// Let's add some more ingredients to the mix! 😉

// In the src/components/AddFoodForm.jsx file, create a new controlled component named AddFoodForm that lets you add new food items to your list.

// The component should contain a form with four (4) input elements:

// Input with the label Name with attributes: name="name" and type="text"
// Input with the label Image with attributes: name="image" and type="text"
// Input with the label Calories with attributes: name="calories" and type="number"
// Input with the label Servings with attributes: name="servings" and type="number"

// The form should have a submit button displaying the text Create.

// Once you've created the AddFoodForm component, render it in App.js. When the submit button is clicked, the new food item should be added to the list.

// Hint: To add a new food item to the foods array, which is in the state of the App component, you have to pass a function from the App to the AddFoodForm component through props. This function should take the values entered in the input fields and add them as a new object to the foods array.
