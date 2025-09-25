import tomatoPasta from "../images/img_tomato_pasta.jpg";
import tomatoSoup from "../images/img_tomato_soup.jpg";
import tomatoSalad from "../images/img_tomato_salad.jpg";
import tomatoSandwich from "../images/img_tomato_sandwich.jpg";
import "./recipes.css";

function Recipes() {
  const recipeList = [
    {
      id: 1,
      title: "Tomato Pasta",
      description: "Delicious tomato-based pasta.",
      image: tomatoPasta,
    },
    { id: 2, title: "Tomato Soup", description: "Classic warm tomato soup.", image: tomatoSoup },
    {
      id: 3,
      title: "Tomato Salad",
      description: "Fresh tomato salad with basil.",
      image: tomatoSalad,
    },
    {
      id: 4,
      title: "Tomato Sandwich",
      description: "Tasty sandwich with fresh tomatoes and cheese.",
      image: tomatoSandwich,
    },
  ];

  return (
    <div className="recipes-page">
      <h1 className="recipes-header">Recipes</h1>
      <ul>
        {recipeList.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <img src={recipe.image} alt={recipe.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
