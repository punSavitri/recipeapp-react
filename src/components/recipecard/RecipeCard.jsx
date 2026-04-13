import React, { useState } from "react";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  // destructure recipe properties for cleaner access
  const { idMeal, strMeal, strCategory, strMealThumb, strInstructions } =
    recipe;
  //state to control show/hide the modal
  const [showModal, setShowModal] = useState(false);

  // function to extract ingredients + measurements
  //TheMealDB API stores ingredients as strIngredients1...20
  const getIngredients = (recipe) => {
    const ingredients = [];
    //loop through 20 possible ingredients fields
    for (let i = 0; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      //only push non-empty ingredients
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(`${ingredient.trim()} - ${measure?.trim() || ""}`);
      }
    }
    return ingredients;
  };
  //store extracted ingredients in an array
  const ingredients = getIngredients(recipe);
  return (
    <>
      {/* main recipe card */}
      <div className="recipecard">
        {/* recipe image */}

        <img src={strMealThumb} alt={strMeal} className="recipecard-image" />
        <div className="recipecard-body">
          {/* recipe category label */}
          <span className="recipecard-category">{strCategory}</span>
          {/* recipe title */}
          <h3>{strMeal}</h3>
          {/* ingredients list */}
          <h4>Ingredients</h4>
          {/* replace ingredients list dynamacially from API */}
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {/* button to open modal with instructions  */}
          <button
            className="view-instructions-btn"
            onClick={() => setShowModal(true)}
          >
            View Instructions
          </button>
        </div>
      </div>
      {/* Modal section (only renders when showModal = true) */}
      {/* show modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          {" "}
          {/* //close modal when clicking outside */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {" "}
            {/* prevent closing when clicking inside modal */}
            {/* modal title */}
            <h2>{strMeal} - Instructions</h2>
            {/* recipe instructions */}
            <p>{strInstructions}</p>
            {/* close button */}
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeCard;
