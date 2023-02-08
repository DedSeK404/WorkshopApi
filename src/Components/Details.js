import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const [data, setData] = useState();
  const { idrecipe } = useParams();
  // console.log(idrecipe)
  useEffect(() => {
    const getOneRecipe = async () => {
      try {
        const res = await axios.get(
          `https://api.edamam.com/api/recipes/v2/${idrecipe}?type=public&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
        );
       //  console.log(res.data.hits)
        setData(res.data.recipe);
      } catch (error) {
        console.log(error);
      }
    };
    getOneRecipe();
  }, [idrecipe]);
  //console.log(data);
  return (
    <div>
      <h1>Recipe Details</h1>
      <div style={{display:"flex", flexDirection:"column"}}>
      
        <div class="card">
          <h2 class="card-title">{data && data.label}</h2>
          <img style={{width:"100%"}}
            src={data && data.image}
            alt=""
          />
         
        </div>
        <div class="card-desc">
          <p style={{textAlign:'center', color:'#5f1e0a',fontSize:'35px', fontWeight:"800"}}>
        Ingredients:
          </p>
          
          {data && data.ingredients.map((e)=>(
            <div  style={{display:"flex", flexDirection:"column"}}>
             <li >{e && e.text}</li>
             </div>
             
          ))}
          </div>
      </div>
      </div>
  );
};
