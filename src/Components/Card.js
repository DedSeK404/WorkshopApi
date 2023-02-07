import { Link } from "react-router-dom";
import "./Card.css"

export const Card = ({recipe}) => {
  return (
    <>
      <div id="container">	
        <div className="product-details">
          <h1>{recipe.label}</h1>

          <p className="information">
          cuisineType:  {recipe.cuisineType.map((el)=>(
            <p> {el}</p>
          ))}
          mealType:   {recipe.mealType.map((el)=>(
            <p> {el}</p>
          ))}
         
          dishType: {recipe.dishType.map((el)=>(
            <p> {el}</p>
          ))}<br></br>
          </p>
          <div className="control">
          <Link to={`/details/${recipe.uri.slice(51)}`} >  <button className="btn">
             
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </span>
              <span className="buy">See Details</span>
            </button></Link>
          </div>
        </div>
        <div className="product-image">
          <img
            src={recipe.image}
            alt='0'
          />
          <div className="info">
            <h2> ingredientLines</h2>
            <ul style={{display:"flex", flexWrap:"wrap", flexDirection:'column'}}>{recipe.ingredientLines.map((el)=> <li>
                {el} 
              </li>)}
             

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
