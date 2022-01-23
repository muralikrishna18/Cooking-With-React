import React, { useContext, useEffect } from "react";
import IngredientsList from "./IngredientsList";
import { RecipeContext } from "./App";

export default function Recipe(props) {
  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);
  const { id, name, cookTime, servings, instructions, ingredients } = props;

  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
            onClick={() => handleRecipeSelect(id)}
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe_value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe_value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label ">Instrutcions:</span>
        <div className="recipe_value recipe__instructions recipe__value--indented">
          <span>{instructions}</span>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe_value recipe__value--indented">
          <IngredientsList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
